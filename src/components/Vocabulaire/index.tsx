import { useState } from "react";

const Vocabulaire = () => {
    const [openTab, setOpenTab] = useState('A');
    const alphabet = [
        { id: 'A', dictionary: ['arbre', 'ami', 'armoire', 'abricot', 'asma', 'automne']},
        { id: 'B', dictionary: ['bouche', 'ballon', 'bonbon', 'bureau', 'bœuf']},
        { id: 'C', dictionary: ['citron', 'ciel', 'cent', 'cercle', 'Cécile']},
        { id: 'D', dictionary: ['douche', 'deux', 'dé', 'doudou', 'directeur', 'date', 'dos', 'datte']},
        { id: 'E', dictionary: ['éléphant', 'Elyssa', 'école', 'été']},
        { id: 'F', dictionary: ['flamant', 'forêt', 'ferme', 'fromage', 'fièvre', 'famille', 'fille']},
        { id: 'G', dictionary: ['genou', 'Gina', 'girafe', 'génial']},
        { id: 'H', dictionary: ['hiver', 'herbe', 'heure', 'haut', 'heureux']},
        { id: 'I', dictionary: ['image', 'imprimante', 'insecte', 'intelligent']},
        { id: 'J', dictionary: ['jardin', 'jambe', 'jus', 'jupe', 'judo']},
        { id: 'K', dictionary: ['Kiwi', 'Kilo', 'Kangourou', 'Kaki']},
        { id: 'L', dictionary: ['lit', 'lettre', 'lecture', 'livre', 'Lina', 'légumes', 'lapin']},
        { id: 'M', dictionary: ['maman', 'matin', 'maison', 'main', 'mer', 'manger', 'musique', 'montagne']},
        { id: 'N', dictionary: ['nuit', 'nature', 'nager', 'nom', 'neige', 'nez']},
        { id: 'O', dictionary: ['orange', 'ours', 'omelette', 'ordinateur', 'oreille', 'olive', 'octobre', 'oiseau']},
        { id: 'P', dictionary: ['parents', 'papa', 'perroquet', 'poche', 'pomme', 'poupou', 'patte', 'pain', 'piano', 'poisson', 'poulet']},
        { id: 'Q', dictionary: ['question', 'quatre', 'quartier', 'queue']},
        { id: 'R', dictionary: ['Robe', 'Rouge', 'Robot', 'Radio', 'Rideau', 'Renard']},
        { id: 'S', dictionary: ['sœur', 'salon', 'salle', 'salami', 'sorcière', 'samedi', 'sac', 'savon', 'soleil', 'surprise']},
        { id: 'T', dictionary: ['tigre', 'tête', 'tante', 'tomate', 'table', 'tableau']},
        { id: 'U', dictionary: ['Un']},
        { id: 'V', dictionary: ['Vache', 'Viande', 'Vert', 'Veste', 'Voiture', 'Vendredi', 'Violet']},
        { id: 'W', dictionary: ['']},
        { id: 'X', dictionary: ['']},
        { id: 'Y', dictionary: ['Yaourt', 'Yeux']},
        { id: 'Z', dictionary: ['Zoo', 'Zéro']}
    ];
    return (
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          >
            {alphabet.map((item) => (
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center" key={item.id}>
                    <a
                        className={
                        "text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal rounded-full " +
                        (openTab === item.id
                            ? "text-white bg-blue-600"
                            : "text-blue-600 bg-white")
                        }
                        onClick={e => {
                        e.preventDefault();
                        setOpenTab(item.id);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                    >
                        {item.id}
                    </a>
                </li>
            ))}
            </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                {alphabet.map((item) => (
                        <div className={openTab === item.id ? "block" : "hidden"} id="link1" key={item.id}>
                            <div className="flex items-center justify-center bg-white p-8">
                                <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
                                    {item.dictionary.map((dictionary) => (
                                        <span key={dictionary} className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-lg font-medium text-green-600 ring-1 ring-inset ring-green-500/10 capitalize">{dictionary}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Vocabulaire;