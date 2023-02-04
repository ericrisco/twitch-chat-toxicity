# Twitch ☣️Toxic Tracker

A web-based tool that analyzes and displays Twitch chat messages for toxic behavior.

## Features

- Reads Twitch chat messages for a specified user
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
- To achieve accurate results from the algorithm, the dataset found in the ./dataset folder with 159,572 classified messages was used. This dataset was taken from the following study:
- With that huge amount of messages, a Cohere.ai model was trained and these are the results:

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
`npm run dev`
```

## Demo Usage

- Go to the website [https://twitch-chat-toxicity.vercel.app/](https://twitch-chat-toxicity.vercel.app/) and enter the Twitch username for the chat you want to analyze
- The website will display the chat messages and toxicity scores in real-time
- The custom model It has been trained only with English messages, so it's best to test the app with English Twitch channels (it gives many false positives in other languages).
