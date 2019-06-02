# chat/consumers.py
from channels.generic.websocket import WebsocketConsumer
import json
from .models import Game
from asgiref.sync import async_to_sync

class GameConsumer(WebsocketConsumer):
    def connect(self):
        self.id = self.scope['url_route']['kwargs']['id']
        self.room_group_name = 'game_%s' % self.id
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name,
        )

        self.accept()
        self.join_game()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def join_game(self):
        user = self.scope['user']
        game = Game.objects.get(id=self.id)
        game.users.add(user)
        game.save()
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'join',
                'username': user.username,
            }
        )


    def join(self, username):
        self.send(text_data=json.dumps(username))
        print(username)

    def receive(self, text_data):
        data = json.loads(text_data)
        print(data)
        self.commands[data['command']](self, data)

    # Receive message from room group
    # async def chat_message(self, event):
    #     message = event['message']
    #
    #     # Send message to WebSocket
    #     await self.send(text_data=json.dumps({
    #         'message': message
    #     }))

    commands = {
        'join': join,
    }
