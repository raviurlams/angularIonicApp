# ionic-sdk
This repo contains a sample address book application for iOS/Android/windows that demonstrates how to use the DreamFactory REST API. It includes adding new contact, adding new group and CRUD for related tables.

#Getting DreamFactory on your local machine

To download and install DreamFactory, follow the instructions [here](http://wiki.dreamfactory.com/DreamFactory/Installation). Alternatively, you can create a [free hosted developer account](http://www.dreamfactory.com) at www.dreamfactory.com if you don't want to install DreamFactory locally.


## Getting Started

**Install Ionic**

If you haven't installed Ionic already, follow the instructions [here](http://ionicframework.com/getting-started/).

1. Insert your DSP_API_KEY and DSP_INSTANCE_URL

Open the file 'ionic-sdk\app\config\constants.js' and replace 'DSP_API_KEY' with your APIkey and 'DSP_INSTANCE_URL' with your domain.

2. Install the the latest beta version of the Ionic CLI:
    ```
    npm install -g ionic@beta
    ```

3. Clone this repository into your local
    ```
    https://drive.google.com/folderview?id=0B8tnKlUNjP6gOXl6Yzh2emd2ZU0&usp=sharing
    ```
    
4. Navigate to the ionic-sdk directory:
    ```
    cd ionic-sdk
    ```

5. Install the dependencies
    ```
    npm install
    ```
    
6. Start the app in the browser
    ```
    ionic serve -l
    ```

    