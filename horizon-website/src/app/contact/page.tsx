const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
        Contactez-Nous
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto dark:text-gray-300">
        Nous sommes ravis de discuter de votre projet. Remplissez le formulaire ci-dessous ou contactez-nous directement par email.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl dark:bg-dark-card transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 dark:text-gray-200">Envoyez-nous un message</h2>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors duration-300"
                placeholder="Votre nom complet"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Adresse Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors duration-300"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors duration-300"
                placeholder="Votre message..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-md text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors dark:bg-dark-primary dark:hover:bg-blue-500"
              >
                Envoyer le Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-xl dark:bg-dark-card transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 dark:text-gray-200">Nos Coordonnées</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Email</h3>
              <a href="mailto:contact@horizon-tech.dev" className="text-blue-600 hover:text-blue-800 transition-colors dark:text-blue-400 dark:hover:text-blue-300">
                contact@horizon-tech.dev
              </a>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Adresse</h3>
              <p className="text-gray-600 dark:text-gray-300">
                123 Rue de l'Innovation<br />
                75000 Paris, France (Exemple)
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Emplacement de la Carte</h3>
              <div className="mt-2 h-64 bg-gray-200 rounded-md flex items-center justify-center dark:bg-gray-700 transition-colors duration-300">
                <p className="text-gray-500 dark:text-gray-400">Emplacement de la carte (Google Maps) ici</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
