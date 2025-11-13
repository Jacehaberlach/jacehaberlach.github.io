# jacehaberlach.github.io
# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 7
My Partner's Key: 1

Our initial shared key: 8

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
|   JWW           |  BOO            | 8   |
|     DTZW RTR    |    YOUR MOM     |  5  |
|    TJPMNDNOZM   |    YOURSISTER   | 21  |
|     UKQNZWZ     |      YOUR DAD   | 22  |
Your sister and Your dad are supposed to be swapped with its keys and encode

## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:
LPG5qo
Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 
01001100 01010000 01000111 00110101 01110001 01101111 
### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Jacehaberlach]
    Destination: [Lukeezzeddin]  
    Sequence: 1/3
    Data: [01001100] [01010000]
    =========
    Packet 2:

    Source: [Jacehaberlach]
    Destination: [Lukeezzeddin]
    Sequence: 2/3 
    Data: [01000111] [00110101]
    =========
    Packet 3:
    
    Source: [Jacehaberlach]
    Destination: [Lukeezzeddin]
    Sequence: 3/3
    Data: [01110001] [01101111]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?
asymmetric is when both people have a public key and a private key, and symmetric is all the other ones.
- Why is it important that this protocol uses a new key for each message?
otherwise if you got one key you could see all the messages
- Why is it important that you never share your secret key?
then people can decrypt all your messages
- In the transport layer, do these messages use TCP or UDP? Why?
because if there's one tiny change the message would be incomprehensible
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.
the link layer sends it to a router and the router sends it to other routers in the internet layer
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other information can they still see?
they can see the encrypted message without knowing what it means
