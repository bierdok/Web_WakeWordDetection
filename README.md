# Web Wake Word Detection / Keywords Detection by Davoice

[![GitHub release](https://img.shields.io/github/release/frymanofer/KeyWordDetectionIOSFramework.svg)](https://github.com/frymanofer/KeyWordDetectionIOSFramework/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


By [DaVoice.io](https://davoice.io) email: ofer@davoice.io

[![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FDaVoiceAI)](https://twitter.com/DaVoiceAI)


Welcome to **Davoice Wake Words** – the premier Wake Words / keyword detection solution designed by **DaVoice.io**.

## About this project

This is a **"wake word"** package for React JS, Angular and simple JS. A wake word is a keyword that activates your device, like "Hey Siri" or "OK Google".

It also provide **Speech to Intent**. **Speech to Intent** refers to the ability to recognize a spoken word or phrase
and directly associate it with a specific action or operation within an application. Unlike a **"wake word"**, which typically serves to activate or wake up the application,
Speech to Intent goes further by enabling complex interactions and functionalities based on the recognized intent behind the speech.

For example, a wake word like "Hey App" might activate the application, while Speech
to Intent could process a phrase like "Play my favorite song" or "Order a coffee" to
execute corresponding tasks within the app.
Speech to Intent is often triggered after a wake word activates the app, making it a key
component of more advanced voice-controlled applications. This layered approach allows for
seamless and intuitive voice-driven user experiences.


## Features

- **High Accuracy:** Our advanced machine learning models deliver top-notch accuracy.
- **Platforms:** Web, JS, Angular, React etc'
- **Easy to deploy:** Check out our example to enabled your web app.
- **Low Latency:** Experience near-instantaneous keyword detection.

## Contact

For any questions, requirements, or more support for React-Native, please contact us at ofer@davoice.io.

## Installation and Usage

# Example
cd example

npm install

npm run build

# Test it in a browser:
You can run use https server to test the wake words.

Here is an example:

npm install -g http-server

http-server . -p 8080 --ssl --cert cert.pem --key key.pem

or "npm run start"

## If you do not have cert.pem and/or key.pem: you can create them as follow:

nopenssl genrsa -out key.pem 2048

nopenssl req -new -key key.pem -out csr.pem

nopenssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem

### Next steps
Open a browser with the following URL https://192.168.1.218:8080 <br>
See that it is working for you.<br>
Integrate it to your life website/app.<br>

## Contact us
If you need any help contact us: ofer@davoice.io

## Links

- **Web / Javascript / JS Wake Word npm package:** https://www.npmjs.com/package/web-wake-word
- **If you need React-Native wake word: ** https://www.npmjs.com/package/react-native-wakeword

Here are wakeword detection GitHub links per platform:

- **For Python:** https://github.com/frymanofer/Python_WakeWordDetection
- **Web / JS / Angular / React:** https://github.com/frymanofer/Web_WakeWordDetection/tree/main
- **For React Native:** [ReactNative_WakeWordDetection](https://github.com/frymanofer/ReactNative_WakeWordDetection)
- **For Flutter:** [https://github.com/frymanofer/Flutter_WakeWordDetection]
- **For Android:** [KeywordsDetectionAndroidLibrary](https://github.com/frymanofer/KeywordsDetectionAndroidLibrary)
- **For iOS framework:** 
  - With React Native bridge: [KeyWordDetectionIOSFramework](https://github.com/frymanofer/KeyWordDetectionIOSFramework)
  - Sole Framework: [KeyWordDetection](https://github.com/frymanofer/KeyWordDetection)
