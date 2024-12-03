
# URL Shortener  

## Technologies Used  
- **Node.js**  
- **MongoDB**  

---

## Modules Used  
- **Express**: To create the backend.  
- **Mongoose**: To connect to the local MongoDB server.  
- **Shortid**: To generate short, unique IDs for URLs.  

---
## IDEA 
![IDEA](/image/idea.jpg "Optional Title") 

## Project Images  
# Create a ShortId
![URL](/image/POST.png "Optional Title")

# Get the Click Count about a link
![DATA](/image/Data_get.png "Optional Title")

---

## How to Start the Project  

```bash
1. npm install
2. npm start
```  

---

## API Routes  

### 1. Shorten a URL  
**Endpoint:** `POST http://localhost:3000/url/`  
**Request Body:**  
```json
{
    "url": "https://www.youtube.com/watch?v=XTp5jaRU3Ws&list=RDMM8ELaOmEHB-M&index=2"
}
```  

### 2. Redirect to the Original URL  
**Endpoint:** `GET http://localhost:3000/id/:id`  
**Example:**  
```
http://localhost:3000/id/3u1qo5fXY
```  

### 3. Get Click Statistics  
**Endpoint:** `GET http://localhost:3000/data/:id`  
**Example:**  
```
http://localhost:3000/data/3u1qo5fXY
```  
