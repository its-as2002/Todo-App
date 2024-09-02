const Footer = () => {
    return (
        <footer className="bg-black text-white py-4 mt-8 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-sm">
                    © {new Date().getFullYear()} Task Manager. All Rights Reserved.
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        Terms of Service
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        Contact Us
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
