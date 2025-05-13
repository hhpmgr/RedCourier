# RedCourier

## Getting Started

To get started with the RedCourier project, follow these steps:

1. **Clone the Repository**:
   First, clone the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/yourusername/RedCourier.git
   cd RedCourier
   ```

2. **Build the Docker Image**:
   Build the Docker image using the provided Dockerfile:
   ```bash
   sudo docker build -t redcourier .
   ```

3. **Run the Docker Container**:
   Start the Docker container and map port 80 of the container to port 8080 on your host:
   ```bash
   sudo docker run -p 8080:80 redcourier
   ```

4. **Access the Application**:
   Open your web browser and navigate to `http://localhost:8080/index.html` to access the application.

![image](https://github.com/user-attachments/assets/ee4f47b5-fd47-4e36-8387-743ccf68f9d1)

## Call for Contributions
I invite all security specialists/enthousists to contribute to this project. I know for example that there are way more commands to transfer files. Those can be added or adjusted in `data.js` file. Your contributions will help enhance the functionality and usability of this project and the ability to learn and get better for your day to day work, CTF or for your exams like OSCP, OSEP, etc.

## Disclaimer

This project is is developed for educational purposes. It should only be used for attacks where explicit permission has been granted, or in a controlled laboratory environment or CTF (Capture The Flag) event. The authors and maintainers of this project are not responsible for any misuse or illegal activities conducted using this software.
