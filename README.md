# ☣️ Twitch Toxic Tracker

![captura1](https://user-images.githubusercontent.com/20164590/216798121-bc84dfc7-7e53-4f9d-9318-1e4db4dabd4e.png)

The **Twitch Toxic Tracker** is an innovative application that provides real-time monitoring and analysis of Twitch chat messages. It is designed to help streamers and moderators maintain a positive and welcoming environment for their viewers by detecting and classifying toxic messages.

The app connects to Twitch and reads the chat messages for a specified user. Utilizing the **Cohere.ai** API, it classifies each message as either __toxic__ or __benign__ based on its machine learning algorithms and training data. The results are displayed on a user-friendly website in a clear and concise manner.

Not only does the app show the toxicity scores for each message, it also displays the overall percentage of toxic messages in the chat. This provides valuable insights into the health of the chat and allows for proactive measures to be taken to address any toxic behavior.

Additionally, the **Twitch Toxic Tracker** identifies the users who are sending toxic messages. This feature empowers moderators to take appropriate action against toxic users and maintain a safe and enjoyable environment for everyone.

Overall, the **Twitch Toxic Tracker** is an essential tool for streamers and moderators who want to ensure a positive and engaging experience for their viewers. With its real-time monitoring, user-friendly display, and robust features, it is the perfect solution for keeping Twitch chats healthy and enjoyable for all.

<p align="center">
<a href="https://twitch-chat-toxicity.vercel.app/" target="blank">View project</a>
·
<a href="https://github.com/ericrisco/twitch-chat-toxicity/issues/new/choose">Report Bug</a>
·
<a href="https://github.com/ericrisco/twitch-chat-toxicity/issues/new/choose">Request Feature</a>
</p>

## 🔥 Motivation

This project aims to participate in [@midudev](https://www.github.com/midudev) hackathon: [midudev-cohere-2023](https://github.com/topics/midudev-cohere-2023), in collaboration with [co:here AI](https://cohere.ai/).

## 💡 Idea

The main idea is for the streamer to enter their username, resize the window, and place it next to OBS while they are streaming in order to visually detect toxic individuals in their chat in a much more efficient manner.

![Captura de pantalla 2023-02-05 002439](https://user-images.githubusercontent.com/20164590/216793762-6b025345-fe2e-40f5-9352-8722a27603f7.png)
</br>
</br>

## 💻 Features

- Reads Twitch chat messages for a specified user
- Uses the Twitch API to show if the user is online or not
- Uses the Cohere.ai API to classify each message as toxic or not toxic
- Displays the chat messages and toxicity scores on a user-friendly website
- Shows the percentage of toxic messages in the overall chat
- Identifies the users who are sending toxic messages

## 💻 Technologies Used

- [Astro 2.0](https://github.com/astrojs)
- [React](https://reactjs.org/)
- [Cohere.ai](https://cohere.ai/)
- [Twitch API](https://dev.twitch.tv/docs/api)
- [Tmi.js](https://github.com/AhadCove/react-tmi)

## 🤖 Custom Model

### Trained Custom Model ID
```bash
e4a74d77-11f0-42ef-af96-2781f879bc1d-ft
```

- The application uses Cohere.ai and its classification algorithm to classify messages as toxic or benign.
- To achieve accurate results from the algorithm, a dataset from a [Kaggle Challenge](https://www.kaggle.com/competitions/jigsaw-toxic-comment-classification-challenge/overview) has been used. The dataset has 159,572 classified messages as toxic or bening.
<p align="center">
<a href="https://firebasestorage.googleapis.com/v0/b/kingsleague-22e86.appspot.com/o/twitch-chat-toxicity%2Ftrain.csv?alt=media&token=13e7902f-4579-4aff-910b-42def7068560" target="blank">Kaggle train dataset</a>
·
<a href="https://firebasestorage.googleapis.com/v0/b/kingsleague-22e86.appspot.com/o/twitch-chat-toxicity%2Ftrain_clean.csv?alt=media&token=8bdbc4f1-13e0-4cfa-a8a3-07ebfb814028">Cleaned dataset (prepared for Co:here.ai)</a>
</p>

### Cohere.ai model after training

![trained_model](https://user-images.githubusercontent.com/20164590/216793201-25dc23d7-02f1-4747-a1b1-ab63292b2164.png)

## 🗺️ Demo Usage

- Go to the website [https://twitch-chat-toxicity.vercel.app/](https://twitch-chat-toxicity.vercel.app/) and enter the Twitch username for the chat you want to analyze
- The website will display the chat messages and toxicity scores in real-time
- The custom model It has been trained only with English messages, so it's best to test the app with English Twitch channels (it gives many false positives in other languages).
- Please note that in this demo the Cohere.ai Free Tier is being consumed, which only allows for 100 messages per minute to be sent. This limit can be exceeded with streamers who have many viewers and a busy chat. After one minute of being blocked, the application continues to function correctly.

## 🛠️ Installation steps

1. Clone the repository:

```bash
git clone https://github.com/ericrisco/twitch-chat-toxicity
```

2. Install the dependencies:

```bash
npm install
```

3. Rename `.env.example` file to `.env` and add your own Cohere.ai API Key
4. Add your own Twitch Cliend id and Twitch Client Secret
5. Start the development server: 

```bash
npm run dev
```

## 🙇 Future implementations

- In future versions of this app, it will no longer be possible to enter the username of the person whose chat you want to read. Instead, you will have to log in with your Twitch account in order to view your own chat. This will allow for better control of app usage.
- With the previous point implemented, it will also be possible to integrate more features from the Twitch API, such as the ability to ban directly from the web app interface.
- With the two previous points implemented, a system will be set up where the streamer themselves can detect false positives or false negatives. In this way, the AI will be able to train incrementally and with the help of the users.

