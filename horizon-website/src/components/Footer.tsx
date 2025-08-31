const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-700 text-white p-4 text-center dark:bg-gray-800 dark:text-gray-300 transition-colors duration-300">
      <p>© {currentYear} Horizon. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
