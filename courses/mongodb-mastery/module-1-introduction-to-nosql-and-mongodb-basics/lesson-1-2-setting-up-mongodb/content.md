# Lesson 1.2: Setting up MongoDB (Local & Atlas)

*   **MongoDB Architecture Overview (Conceptual)**
    *   **Document:** The basic unit of data in MongoDB, similar to a row in a relational database but with a more flexible, JSON-like structure.
    *   **Collection:** A group of documents, analogous to a table in a relational database. Collections do not enforce a fixed schema.
    *   **Database:** A container for collections. A MongoDB server can host multiple databases.
    *   **Instance (`mongod`):** The core process that runs the MongoDB database.
*   **Option 1: Local Installation (for Development)**
    *   **Purpose:** Great for local development, testing, and learning without internet dependency.
    *   **Steps (Platform-Specific - e.g., Windows, macOS, Linux):**
        1.  **Download:** Go to the [MongoDB Community Server Download Center](https://www.mongodb.com/try/download/community) and select your OS.
        2.  **Installation:** Follow the specific installation guide for your OS. This usually involves running an installer or using a package manager.
            *   **Windows:** MSI installer.
            *   **macOS:** `brew install mongodb-community@6.0` (or latest version).
            *   **Linux (Ubuntu/Debian):** `apt` package manager commands.
        3.  **Start MongoDB Server (`mongod`):**
            *   On Windows, it might run as a service.
            *   On macOS/Linux, you often run `mongod` from the terminal. You might need to create a `data/db` directory.
                ```bash
                sudo mkdir -p /data/db
                sudo chown `id -un` /data/db # Give ownership to your user
                mongod
                ```
            *   You should see messages indicating the server is waiting for connections on port 27017.
        4.  **Connect with MongoDB Shell (`mongosh`):**
            *   `mongosh` is the new interactive JavaScript interface for MongoDB.
            *   Open a new terminal window and run:
                ```bash
                mongosh
                ```
            *   You should see a prompt indicating you're connected (e.g., `test>`).
*   **Option 2: MongoDB Atlas (Cloud-Hosted - Recommended for Projects)**
    *   **Purpose:** A fully managed, cloud-based MongoDB service. No installation required on your machine. Great for personal projects, team collaboration, and production deployments.
    *   **Benefits:** Scalability, reliability, security, backups, monitoring.
    *   **Steps:**
        1.  **Sign Up:** Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free account.
        2.  **Create a Free Cluster (M0 Sandbox):**
            *   Choose a cloud provider (AWS, Azure, GCP) and a region close to you.
            *   Select "M0 Sandbox" (free tier).
            *   Name your cluster.
        3.  **Configure Network Access:**
            *   **IP Access List:** Add your current IP address (or allow access from anywhere `0.0.0.0/0` for initial testing, but restrict later for security).
        4.  **Create a Database User:**
            *   Set a username and a strong password. Remember these credentials!
        5.  **Connect to Your Cluster:**
            *   Once the cluster is deployed (takes a few minutes), click the "Connect" button.
            *   Choose "Connect your application" and select **Node.js** as the driver.
            *   Copy the connection string (URI). It will look something like: `mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/?retryWrites=true&w=majority`
            *   Replace `<username>` and `<password>` with your database user credentials.
*   **MongoDB Compass (GUI Tool)**
    *   A powerful graphical user interface (GUI) tool for MongoDB. It allows you to visually explore your data, run queries, and manage your database.
    *   **Download:** [MongoDB Compass Download](https://www.mongodb.com/try/download/compass)
    *   **Connect:** Use your local connection string (`mongodb://localhost:27017`) or your Atlas connection string to connect.
*   **Exercise: Set Up Your MongoDB Environment**
    1.  Choose one of the installation options:
        *   **Local:** Install MongoDB Community Server on your machine and start the `mongod` process. Verify by connecting with `mongosh`.
        *   **Atlas:** Sign up for MongoDB Atlas, create a free M0 cluster, configure network access, and create a database user. Copy your connection string.
    2.  Install and connect to MongoDB Compass using your chosen method's connection string.
    3.  Create a new database (e.g., `mydatabase`) and a new collection (e.g., `mycollection`) within Compass.

### Helpful Links:

*   [MongoDB Community Server Download](https://www.mongodb.com/try/download/community)
*   [MongoDB Atlas Cloud Database](https://www.mongodb.com/cloud/atlas)
*   [MongoDB Compass Download](https://www.mongodb.com/try/download/compass)
