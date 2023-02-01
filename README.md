## Twitch Chat Toxicity Monitor

A web-based tool that analyzes and displays Twitch chat messages for toxic behavior.

### Features

- Reads Twitch chat messages for a specified user
- Uses the Cohere.ai API to classify each message as toxic or not toxic
- Displays the chat messages and toxicity scores on a user-friendly website
- Shows the percentage of toxic messages in the overall chat
- Identifies the users who are sending toxic messages

### Technologies Used

- [Astro 2.0](https://github.com/astrojs)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Cohere.ai](https://cohere.ai/)
- [Twitch API](https://dev.twitch.tv/docs/api)

### Installation

1. Clone the repository: `git clone https://github.com/[YOUR_USERNAME]/twitch-chat-toxicity-monitor.git`
2. Install the dependencies: `npm install`
3. Set up your Cohere.ai API key in the `.env` file
4. Start the development server: `npm start`

### Usage

1. Go to the website and enter the Twitch username for the chat you want to analyze
2. The website will display the chat messages and toxicity scores in real-time

### Contributing

If you want to contribute to this project, please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

### License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
