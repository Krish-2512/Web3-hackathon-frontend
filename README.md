# DOC-Chain Frontend
>**DocChain**
>**Enhancing Sustainable Eco-Tourism in Northeast India:** A Blockchain-Based Solution with Transparent Voting, Claims Management, and Secure Deployment

---

## Installation

- Step 1: Clone this repository into your local machine. (See [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository))
- Step 2: Install all the dependencies. 
```bash
npm install
```
- Step 3: Run the React server.
```bash
npm start
```
---

## Backend
The const folder inside the src folder contains the addresses of all the smart contracts. We don't have any backend other than three contracts already deployed on the blockchain.

---

# Screens

## Home Screen
This screen holds the main structure of the website. It contains different options to perform different tasks to request and send claims to other users or receive and send information to other users. This screen contains the AVATAR for the person, which is made by using GenAI
![Home1](https://github.com/Krish-2512/Web3-hackathon-frontend/blob/master/img/homepg5.jpg)



## Docker Screen
This screen enables users to upload and manage documents with ease. IPFS provides a decentralized and cost-effective storage solution, helping to avoid the expensive fees associated with storing large files on the blockchain.For managing documents, I have used IPFS as storing big files on the Blockchain is expensive
### Role of Docker:
**Containerization**: Guarantees consistent deployment of IPFS and blockchain services.

**Scalability**: Manages high traffic during busy tourism seasons.

**Efficiency**: Enhances resource usage and streamlines updates.

**Security**: Isolates components to safeguard sensitive operations.
![ipfs1](https://github.com/Krish-2512/Web3-hackathon-frontend/blob/master/img/docker1.png)


## Voter Screen
This feature uses blockchain technology to promote efficient, transparent, and accountable decision-making.
### Key Highlights:
1.**Inefficient Decision-Making:** Multi-level voting brings in various viewpoints, accelerates processes, and meets local needs.

2.**Limited Accountability:** With blockchain, every vote is recorded, enhancing transparency and encouraging responsible governance.
![Votingpg](https://github.com/Krish-2512/Web3-hackathon-frontend/blob/master/img/motive1.png)

It offers the option to create a new poll and displays all the polls in our contract along with their results. This ensures there is no tampering mechanism by not revealing which users have voted for which option.
only restricted voters can vote.

![Voting1](https://github.com/Krish-2512/Web3-hackathon-frontend/blob/master/img/vote2.png)


## Accomodation Access Screen
This screen displays all registerd resorts, as well as any shared resorts (i.e.,shared to which someone else has granted you access for a limited time). From this screen, you can manage all your resorts, including those to which you have access. Additionally, you can check in into your resort using the form in the bottom left corner .

![Resort1](https://github.com/Krish-2512/Web3-hackathon-frontend/blob/master/img/resort4.png)
![Resort2](https://github.com/Krish-2512/Web3-hackathon-frontend/blob/master/img/resort5.png)
![Resort3](https://github.com/Krish-2512/Web3-hackathon-frontend/blob/master/img/resort1.png)

-------
## dotenv
Create a .env file and place your clientId of the third-web account in REACT_APP_TEMPLATE_CLIENT_ID. To obtain your private key, sign in to your third-web account, then navigate to settings > API Key and create the API Key. Afterwards, copy and paste the client ID.
(REACT_APP_TEMPLATE_CLIENT_ID = cc68726829403494c9bffbba85d514de).
[GenAI api](https://stablediffusionapi.com/), Go to this website, Login and go to the dashboard. Go to settings and generate your api key
and copy and paste this api key to the env file in STABLE_API

------
## Additional Resources

- [Documentation](https://portal.thirdweb.com)
- [Templates](https://thirdweb.com/templates)
- [Video Tutorials](https://youtube.com/thirdweb_)
- [Blog](https://blog.thirdweb.com)

## Author Info

#### Aditya Gupta

- Email - [vaibhavjangid2111@gmail.com](mailto:vaibhavjangid2111@gmail.com)
- Github - [vaibhavj2111](https://github.com/vaibhavj2111)
<!---->
