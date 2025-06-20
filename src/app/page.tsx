import Navigation from './components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-white py-28 md:py-40 overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-0 -left-1/4 w-full h-full bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl transform -rotate-45 opacity-70" />
          <div className="absolute bottom-0 -right-1/4 w-full h-full bg-gradient-to-l from-indigo-500/10 to-transparent rounded-full blur-3xl transform rotate-45 opacity-70" />

          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
              WE SELL LEADS
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-5xl mx-auto font-medium text-blue-100/90 leading-relaxed">
              Des leads B2B qualifiés. Vérifiés. Livrés. Payés à la performance.
            </p>
            <a 
              href="https://app.iclosed.io/e/baptistepiocelle/contact" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-white text-slate-900 px-10 py-5 rounded-xl font-bold text-lg md:text-xl shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-blue-400/40 animate-pulse-slow"
            >
              → Planifiez un appel de 15 min
            </a>
            <p className="text-base mt-8 text-blue-200/80">Aucun engagement • Résultats garantis</p>
          </div>
        </section>

        {/* Social Proof Banner */}
        <section className="bg-slate-800 text-white py-6">
          <div className="container mx-auto px-6 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-2 md:space-y-0 text-lg font-medium">
              <span>
                <span className="font-bold text-blue-300">+4.000</span> leads générés en moyenne par client/mois
              </span>
              <span className="text-slate-500 hidden md:block">|</span>
              <span>
                <span className="font-bold text-green-300">6</span> secteurs desservis
              </span>
            </div>
          </div>
        </section>

        {/* What we do Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
              {/* Left Column: Description */}
              <div className="pr-8">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                  Une source prévisible de leads B2B exclusifs
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed space-y-4">
                  <span>
                    Nous exploitons des marques verticales qui génèrent chaque jour des leads qualifiés.
                    Ces leads sont vérifiés, engagés, et disponibles à l'achat en exclusivité – selon votre secteur, votre cible, et leur niveau d'intention.
                  </span>
                  <strong className="block text-slate-800 pt-2">Vous sélectionnez les leads que vous voulez. Vous payez à la lead. Rien de plus.</strong>
                </p>
              </div>

              {/* Right Column: Key Benefits */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-xl border border-slate-100 p-10">
                <ul className="space-y-6">
                  <li className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                      ✓
                    </div>
                    <p className="ml-5 text-lg font-medium text-slate-800">
                      Leads alignés à votre cible idéale
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                      ✓
                    </div>
                    <p className="ml-5 text-lg font-medium text-slate-800">
                      Emails, téléphones et données firmo vérifiés
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                      ✓
                    </div>
                    <p className="ml-5 text-lg font-medium text-slate-800">
                      Aucun setup. Aucun engagement. Juste des résultats.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* For who Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-x-20 gap-y-12 items-center">
              {/* Left Column: Description */}
              <div className="lg:pr-8">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Est-ce que c'est pour vous ?
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Nos leads sont conçus pour les entreprises B2B qui veulent du pipeline maintenant – pas des outils, pas des bases froides.
                  Que vous soyez en phase de scale ou d'optimisation, nous vous livrons des leads qualifiés, exclusifs et disponibles à l'achat.
                </p>
              </div>

              {/* Right Column: Key Targets */}
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200/80">
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-white flex items-center justify-center font-bold text-md shadow-sm mt-1">✓</div>
                    <span className="ml-4 text-slate-700 text-lg">Agences à +100k€/mois de C.A.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-white flex items-center justify-center font-bold text-md shadow-sm mt-1">✓</div>
                    <span className="ml-4 text-slate-700 text-lg">SaaS B2B en acquisition active</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-white flex items-center justify-center font-bold text-md shadow-sm mt-1">✓</div>
                    <span className="ml-4 text-slate-700 text-lg">Fintech ciblant TPE, PME ou indépendants</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-white flex items-center justify-center font-bold text-md shadow-sm mt-1">✓</div>
                    <span className="ml-4 text-slate-700 text-lg">ETI & grandes entreprises B2B (de 50 à 1.000+ salariés)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-white flex items-center justify-center font-bold text-md shadow-sm mt-1">✓</div>
                    <span className="ml-4 text-slate-700 text-lg">Start-up financées en phase de croissance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-white flex items-center justify-center font-bold text-md shadow-sm mt-1">✓</div>
                    <span className="ml-4 text-slate-700 text-lg">E-commerce B2B avec forte valeur client</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Prévisible. Scalable. Mesurable.
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Nos clients reçoivent des leads B2B réguliers, qualifiés, et exploitables immédiatement.
              </p>
              <p className="text-lg text-slate-800 font-semibold leading-relaxed bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl inline-block px-6 py-3 border border-blue-100">
                Là où la prospection classique plafonne, nous combinons volume, ciblage et intention.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 - Prévisible */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    Prévisible
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">Jusqu'à 5000+</div>
                  <p className="text-slate-600 leading-relaxed">
                    leads qualifiés livrés chaque mois de manière régulière et prévisible
                  </p>
                </div>

                {/* Card 2 - Scalable */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl hover:border-green-200 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    Scalable
                  </h3>
                  <div className="text-3xl font-bold text-green-600 mb-4">25€ - 300€</div>
                  <p className="text-slate-600 leading-relaxed">
                    coût par lead, selon le secteur et vos critères. Évoluez selon vos besoins.
                  </p>
                </div>

                {/* Card 3 - Mesurable */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    Mesurable
                  </h3>
                  <div className="text-3xl font-bold text-purple-600 mb-4">100% Exclusifs</div>
                  <p className="text-slate-600 leading-relaxed">
                    leads vérifiés, enrichis et prêts à être contactés avec des métriques précises
                  </p>
                </div>
              </div>

              {/* Additional metrics */}
              <div className="mt-16 grid md:grid-cols-4 gap-6">
                <div className="text-center bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
                  <div className="text-2xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-slate-600 text-sm font-medium">Taux de livraison</div>
                </div>
                <div className="text-center bg-gradient-to-br from-slate-50 to-green-50 rounded-xl p-6 border border-slate-200">
                  <div className="text-2xl font-bold text-green-600 mb-2">7 à 30 jours</div>
                  <div className="text-slate-600 text-sm font-medium">Délai de livraison</div>
                </div>
                <div className="text-center bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl p-6 border border-slate-200">
                  <div className="text-2xl font-bold text-purple-600 mb-2">95%</div>
                  <div className="text-slate-600 text-sm font-medium">Taux de validation</div>
                </div>
                <div className="text-center bg-gradient-to-br from-slate-50 to-orange-50 rounded-xl p-6 border border-slate-200">
                  <div className="text-2xl font-bold text-orange-600 mb-2">6</div>
                  <div className="text-slate-600 text-sm font-medium">Secteurs couverts</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                De la demande à la livraison en 3 étapes
              </h2>
              <p className="text-xl text-slate-600">
                Un processus simple et transparent pour obtenir vos leads qualifiés
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group relative">
                  {/* Connection line */}
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent transform -translate-y-1/2 z-0"></div>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    Explorez les leads disponibles
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Parcourez notre catalogue de leads par verticale, volume et critères de ciblage
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl hover:border-green-200 transition-all duration-300 group relative">
                  {/* Connection line */}
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-500 to-transparent transform -translate-y-1/2 z-0"></div>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    Sélectionnez votre lot
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Choisissez votre lot selon votre cible idéale et vos besoins spécifiques
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    Recevez vos leads
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Obtenez des leads vérifiés et exclusifs, livrés chaque semaine ou chaque mois
                  </p>
                </div>
              </div>

              {/* Timeline visualization for mobile */}
              <div className="md:hidden mt-8">
                <div className="flex justify-center items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-green-500"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-purple-500"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
              </div>

              {/* Additional info box */}
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 inline-block">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-lg font-semibold text-slate-900">
                        Simple et transparent
                      </p>
                      <p className="text-slate-600">
                        Vous ne payez que les leads. Aucun setup. Aucun engagement long terme.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why us Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Pourquoi des entreprises B2B leaders nous choisissent
              </h2>
              <p className="text-xl text-slate-600">
                Notre approche unique combine expertise sectorielle, technologie avancée et résultats mesurables
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Méthodes sectorielles prêtes à scaler
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Des stratégies d'acquisition éprouvées par secteur, optimisées pour chaque verticale et prêtes à être déployées immédiatement.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl hover:border-green-200 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  Données validées en temps réel
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Zéro base recyclée. Chaque lead est vérifié, enrichi et validé en temps réel pour garantir la fraîcheur et la qualité des données.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  Gestion par des experts B2B
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Une équipe d'experts en acquisition B2B qui comprend vos enjeux et vous accompagne de A à Z dans votre stratégie de croissance.
                </p>
              </div>
            </div>

            {/* Stats section */}
            <div className="mt-20 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-slate-600 font-medium">Entreprises qui nous font confiance</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">6</div>
                  <div className="text-slate-600 font-medium">Secteurs d'activité couverts</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
                  <div className="text-slate-600 font-medium">Temps de réponse moyen</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offer Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Ce qui est inclus
              </h2>
              <p className="text-xl text-slate-600 mb-16">
                Tout ce que vous obtenez avec nos services de génération de leads
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Leads exclusifs vérifiés</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Email, téléphone, LinkedIn & données firmo vérifiés pour chaque contact
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Volume minimum flexible</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Commencez avec 100 leads/mois et augmentez selon vos besoins
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Filtres avancés</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Verticale, pays, taille d'entreprise, niveau d'intention, etc.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Prix transparent</h3>
                  <p className="text-slate-700 leading-relaxed">
                    De 25€ à 300€ par lead selon la cible et vos critères
                  </p>
                </div>

                {/* Card 5 */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Livraison régulière</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Fichiers partagés chaque semaine ou chaque mois selon vos préférences
                  </p>
                </div>

                {/* Card 6 */}
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-100 hover:shadow-xl hover:border-pink-200 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Support premium</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Assistance via Slack, WhatsApp ou email selon vos préférences
                  </p>
                </div>
              </div>

              {/* Additional info box */}
              <div className="mt-12 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
                <div className="flex items-center justify-center space-x-4 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-900">
                      Prêt à démarrer ? 
                    </p>
                    <p className="text-slate-600">
                      Aucun setup. Aucun engagement. Juste des résultats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-100 text-sm font-medium mb-8 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Prêt à démarrer
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Discutons acquisition
              </h2>
              
              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-xl md:text-2xl text-blue-100 mb-6 leading-relaxed">
                  Vous nous dites qui vous ciblez.
                </p>
                <p className="text-xl md:text-2xl text-blue-100 mb-6 leading-relaxed">
                  On vous dit combien de leads qualifiés sont déjà disponibles — et à quel prix par lead.
                </p>
                <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-blue-100 text-lg font-medium border border-white/20">
                  <span className="mr-2">✨</span>
                  Aucun setup. Aucun abonnement. Juste des résultats.
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://app.iclosed.io/e/baptistepiocelle/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold rounded-full text-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
                >
                  Planifiez un appel de 15 min
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                
                <div className="flex items-center text-blue-200 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Réponse sous 24h
                </div>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-16 pt-8 border-t border-white/20">
                <p className="text-blue-200 text-sm mb-4">Rejoignez 500+ entreprises qui nous font confiance</p>
                <div className="flex justify-center items-center space-x-8 opacity-60">
                  <div className="text-blue-200 text-xs">✓ Aucun engagement</div>
                  <div className="text-blue-200 text-xs">✓ Résultats garantis</div>
                  <div className="text-blue-200 text-xs">✓ Démarrage en 48h</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Questions fréquentes
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Tout ce que vous devez savoir sur nos services de génération de leads
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/60 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      Qu'est-ce qu'un lead qualifié ?
                    </h3>
                    <p className="text-slate-700 text-lg leading-relaxed">
                      Un contact pro vérifié (email + téléphone), qui correspond à votre ICP, avec un intérêt déclaré.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/60 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-6 group-hover:bg-indigo-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                      Puis-je tester avec un petit volume ?
                    </h3>
                    <p className="text-slate-700 text-lg leading-relaxed">
                      Le minimum est de 100 leads/mois, mais vous pouvez commencer sur une verticale ou un segment spécifique.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/60 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-6 group-hover:bg-green-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                      Y a-t-il un setup ou un engagement ?
                    </h3>
                    <p className="text-slate-700 text-lg leading-relaxed">
                      Non. Vous ne payez que les leads, et vous arrêtez quand vous voulez.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <p className="text-slate-400">
              © 2024 BPC GROUP. Tous droits réservés.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
} 