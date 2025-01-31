// deleteCarts.js
const { sanityClient } = require('@sanity/client');

// Configure Sanity client
const client = sanityClient({
  projectId: "jtaidua0", // Sanity project ID
  dataset: 'production', // Dataset name
  token: "skX8i5tvdBYMQ7vZjtmK7U1tWLbAG5ErkZwG3nvPWUs2stgUU5ebmWvJDruISUbdEmnsNGGkdxzlFB15mgPA6DFyknbQ9iMhdlICRnqTSnhWqPEIFIk1GoEyMEugr4VwYe81bO5G8JRcQNb74QXWZ8561aFzxLGKznZydGQGUxo7tWVZQR6a", // Sanity token with delete permissions
  useCdn: false, // Ensure real-time updates
});

// Function to delete all carts
async function deleteAllCarts() {
  try {
    // Fetch all cart documents
    const query = `*[_type == "carts"] { _id }`;
    const carts = await client.fetch(query);

    if (carts.length === 0) {
      console.log("No carts found to delete.");
      return;
    }

    // Delete each cart document
    for (const cart of carts) {
      await client.delete(cart._id);
      console.log(`Deleted cart with ID: ${cart._id}`);
    }

    console.log("All carts deleted successfully!");
  } catch (error) {
    console.error("Error deleting carts:", error);
  }
}

// Run the function
deleteAllCarts();