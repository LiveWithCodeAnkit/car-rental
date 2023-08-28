# CarRental: Convenient Car Rental Web App

CarRental is a modern and user-friendly car rental web application built using Next.js, TypeScript, Hygraph, Clerk for Authentication and User Management, and enhanced with Tailwind CSS and DaisyUI for a sleek and responsive user interface. With CarRental, users can easily search for cars, filter them based on price and company name, view car images, and check the price per kilometer. The app also offers a seamless booking experience by allowing users to specify pickup and drop-off locations.

## Features

- **User Authentication and Management**: Powered by Clerk, CarRental ensures secure user authentication and hassle-free user management, allowing users to create accounts, log in, and manage their profiles effortlessly.

- **Interactive Car Search**: Users can conveniently search for available cars using filters for price range and company name, making it easier to find the perfect vehicle for their needs.

- **Detailed Car Information**: Each car listing provides images and essential details, enabling users to make informed decisions before proceeding with a booking.

- **Transparent Pricing**: CarRental displays the price per kilometer for each vehicle, ensuring users have a clear understanding of the cost structure.

- **Effortless Booking Process**: Users can book their chosen car by providing pickup and drop-off locations, streamlining the booking process.

## Tech Stack

- Frontend: Next.js, TypeScript, Tailwind CSS, DaisyUI
- Authentication and User Management: Clerk
- Database : Hygraph

## Getting Started

1. Clone the repository: `git clone https://github.com/yourusername/CarRental.git`
2. Navigate to the project directory: `cd CarRental`
3. Install dependencies: `npm install`
4. Set up environment variables: Rename `.env.example` to `.env.local` and fill in the required values.
5. Run the development server: `npm run dev`
6. Access the app in your browser at: `http://localhost:3000`

## Configuration

- Modify `.env.local` to set up environment-specific variables.
- Customize the UI by editing components in the `src/components` directory.
- Configure database settings in the appropriate file (assuming it's using Hygraph).

## Contributing

Contributions are welcome! If you find a bug or want to add new features, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
