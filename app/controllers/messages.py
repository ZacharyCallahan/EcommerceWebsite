from flask import Flask, render_template, request, redirect, session, flash
from app import app
from app.models.message import Message


@app.route('/send/message', methods=['POST'])
def send_message():
    data = {
        'full_name': request.form['full_name'],
        'email': request.form['email'],
        'subject': request.form['subject'],
        'message': request.form['message']
    }
    Message.save(data)

    return redirect('/message/sent')

@app.route('/message/sent')
def message_sent():
    return render_template('message-sent.html')



