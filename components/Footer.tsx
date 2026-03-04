export default function Footer() {
    return (
        <footer className="px-6 py-12 border-t border-white/10">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-white/60">
                <div>
                    <h3 className="text-white text-xl font-semibold tracking-tight">
                        <span className="gradient-text">Aurorapp</span>
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed">
                        Prévisions d&apos;aurores boréales en temps réel, basées sur des données scientifiques.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-medium mb-4">Liens</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a className="hover:text-white/90 transition-colors" href="#features">
                                Fonctionnalités
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-white/90 transition-colors" href="#download">
                                Téléchargement
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-white/90 transition-colors" href="#">
                                Confidentialité
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-medium mb-4">Légal</h4>
                    <p className="text-sm">
                        © {new Date().getFullYear()} Aurorapp. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}
