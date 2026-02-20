import json
import random

# Expert Neighborhood Data (Dutch)
neighborhoods = {
    "Binnenstad": {
        "context": "De hoogste dichtheid aan Rijksmonumenten, gekenmerkt door Brabantse gotiek en natuursteen gevels.",
        "common_issue": "Verwering van zachte natuursteen (zoals tufsteen) en historisch metselwerk.",
        "landmark": "Sint-Janskathedraal",
        "streets": ["Hinthamerstraat", "Korte Putstraat", "Markt"],
        "tech_context": {
            "Regio": "Centrum (5211)",
            "Stijl": "Brabantse Gotiek",
            "Materiaal": "Tufsteen / Natuursteen"
        },
        "faq": {
            "q": "Welke eisen gelden er voor monumenten in de Binnenstad?",
            "a": "In de binnenstad (postcode 5211) is voor elke gevelwijziging een omgevingsvergunning vereist, met strikt toezicht op materiaalgebruik zoals baksteenformaat en voegkleur."
        }
    },
    "Muntel": {
        "context": "Een karakteristieke jaren '20 wijk met sterke invloeden van de Amsterdamse School.",
        "common_issue": "Optrekkend vocht in het metselwerk en degradatie van specifieke stijlelementen.",
        "landmark": "Het Muntelbruggetje",
        "streets": ["Geldersedam", "Muntelbolwerk", "Taxandriaplein"],
        "tech_context": {
            "Architectuur": "Amsterdamse School",
            "Baksteen": "Specifieke 1920-formaten",
            "Ondergrond": "Veen/Moerasgrond"
        },
        "faq": {
            "q": "Waarom is vocht een probleem in De Muntel?",
            "a": "De wijk is gebouwd op een voormalig moerasgebied (De Bossche Broek), wat vaak leidt tot een hogere grondwaterdruk op de gevels."
        }
    },
    "Uilenburg": {
        "context": "De oudste wijk van de stad, waar panden direct grenzen aan de Binnendieze.",
        "common_issue": "Funderingsproblematiek en vochtdoorslag door de directe ligging aan het water.",
        "landmark": "Standbeeld Zoete Lieve Gerritje",
        "streets": ["Korenbrugstraat", "Molenstraat", "Lepelstraat"],
        "tech_context": {
            "Ligging": "Aan de Binnendieze",
            "Risico": "Palenpest (bacteriële aantasting)",
            "Funderingstype": "Houten paalfundering"
        },
        "faq": {
            "q": "Hoe herken ik funderingsproblemen in de Uilenburg?",
            "a": "Klemmende deuren, scheurvorming in de gevel en het scheefzakken van vloeren zijn de eerste signalen van verzakking door de nabijheid van de Binnendieze."
        }
    },
    "West": {
        "context": "Een gebied waar industrieel erfgoed en moderne herontwikkeling samenkomen (Paleiskwartier/Willemspoort).",
        "common_issue": "Renovatie van stalen constructies en betonrot in naoorlogse of industriële panden.",
        "landmark": "Verkadefabriek",
        "streets": ["Boschdijkstraat", "Oude Vlijmenseweg", "Paleiskwartier"],
        "tech_context": {
            "Focus": "Industrieel Erfgoed",
            "Techniek": "Betonherstel / Staalconservering",
            "Bouwperiode": "Naoorlogs / Industrieel"
        },
        "faq": {
            "q": "Kan betonrot bij monumenten in West gestopt worden?",
            "a": "Ja, door middel van kathodische bescherming of het handmatig verwijderen van aangetast staal en herstel met specialistische mortels."
        }
    },
    "Rosmalen": {
        "context": "Landelijk wonen met een mix van monumentale boerderijen en vrijstaande herenhuizen.",
        "common_issue": "Onderhoud aan rieten kappen en houtrot in monumentale kozijnen in een groene omgeving.",
        "landmark": "De Annenborch",
        "streets": ["Dorpstraat", "Raadhuisstraat", "Hoff van Hollantlaan"],
        "tech_context": {
            "Omgeving": "Landelijk / Groen",
            "Stijl": "Boerderij / Herenhuis",
            "Aandachtspunt": "Hoge luchtvochtigheid (Gaf)"
        },
        "faq": {
            "q": "Waarom is er meer houtrot in Rosmalen?",
            "a": "De bosrijke, groene omgeving zorgt voor langduriger vochtbelasting op geveltimmerwerk, waardoor preventief onderhoud met lijnolieverf essentieel is."
        }
    }
}

# Expert Services Data (Dutch)
services = {
    "Gevelrestauratie": {
        "term": "Inboeten van baksteen",
        "description": "Herstel van metselwerk met behoud van historische baksteenformaten (Waalformaat) en patina.",
        "tech_specs": {
            "Hoofdtechniek": "Inboeten van baksteen",
            "Materiaal": "Historische baksteen / Kalkmortel"
        },
        "faq": {
            "q": "Wat is inboeten van baksteen?",
            "a": "Het proces waarbij individuele, beschadigde stenen worden vervangen door identieke historische stenen om de constructieve integriteit te herstellen."
        }
    },
    "Dakrenovatie": {
        "term": "Leidekkerswerk",
        "description": "Specialistische renovatie van leien daken (Maasdekking of Rijndekking) en zinkwerk.",
        "tech_specs": {
            "Techniek": "Leidekkerswerk (Maas/Rijn)",
            "Lood- en Zinkwerk": "Restauratiekwaliteit"
        },
        "faq": {
            "q": "Welke dakbedekking is verplicht voor monumenten?",
            "a": "Meestal zijn natuurleien of keramische dakpannen in specifieke kleuren verplicht, afhankelijk van de welstandseisen."
        }
    },
    "Glas-in-lood restauratie": {
        "term": "Brandschilderen en verloding",
        "description": "Ambachtelijk herstel van glas-in-lood panelen inclusief herverloding en museumglas-plaatsing.",
        "tech_specs": {
            "Methodiek": "Brandschilderen en herverloding",
            "Isolatie": "Voorzetramen of monumentenglas"
        },
        "faq": {
            "q": "Kan monumentaal glas-in-lood worden geïsoleerd?",
            "a": "Ja, door middel van achterzetramen of het plaatsen van het glas-in-lood in speciaal monumentaal isolatieglas."
        }
    },
    "Monumentaal schilderwerk": {
        "term": "Lijnolieverf",
        "description": "Toepassing van traditionele lijnolieverf in authentieke Bossche kleurstellingen.",
        "tech_specs": {
            "Verf": "Authentieke Lijnolieverf",
            "Kleurenpalet": "Rijksmonumenten Waaaier"
        },
        "faq": {
            "q": "Wat is het voordeel van lijnolieverf?",
            "a": "Lijnolieverf dringt dieper in het hout, blijft elastisch en laat het hout ademen, waardoor houtrot wordt voorkomen."
        }
    },
    "Voegwerk herstel": {
        "term": "Knip- en snijvoegen",
        "description": "Restauratie van historisch voegwerk met kalkmortel voor een ademende gevel.",
        "tech_specs": {
            "Voegtype": "Knipvoeg / Snijvoeg",
            "Bindmiddel": "Kalkmortel (geen cement)"
        },
        "faq": {
            "q": "Waarom geen cementvoegen bij monumenten?",
            "a": "Cement is te hard en sluit de gevel af, wat leidt tot vochtophoping en vorstschade aan de zachte historische bakstenen."
        }
    },
    "Natuursteen reparatie": {
        "term": "Steenhouwerswerk",
        "description": "Vervanging of reparatie (aanhelen) van ornamenten in Belgisch hardsteen of zandsteen.",
        "tech_specs": {
            "Materiaal": "Belgisch Hardsteen / Zandsteen",
            "Techniek": "Aanhelen met reparatiemortel"
        },
        "faq": {
            "q": "Kunnen beschadigde ornamenten hersteld worden?",
            "a": "Ja, met speciale minerale reparatiemortels kunnen missende delen worden aangeheeld zonder het origineel te vervangen."
        }
    },
    "Schoorsteen renovatie": {
        "term": "Voeg- en loodwerk",
        "description": "Algeheel herstel van schoorsteenkoppen, inclusief loodloketten en kappen.",
        "tech_specs": {
            "Onderdeel": "Schoorsteenkop & Loodloketten",
            "Waterdichting": "Bladlood Code 15/20"
        },
        "faq": {
            "q": "Hoe vaak moet een monumentale schoorsteen gevoegd worden?",
            "a": "Door de extreme weersbelasting op hoogte is inspectie elke 5 jaar en herstel elke 20-30 jaar gebruikelijk."
        }
    },
    "Houtrotreparatie": {
        "term": "Deelvervanging en epoxytechniek",
        "description": "Duurzaam herstel van kozijnen en stijlen met behoud van zoveel mogelijk origineel hout.",
        "tech_specs": {
            "Techniek": "Deelvervanging (Lamineren)",
            "Middel": "2-componenten Epoxy"
        },
        "faq": {
            "q": "Moet een heel kozijn vervangen worden bij houtrot?",
            "a": "Nee, bij monumenten streven we naar maximaal behoud van historisch materiaal door enkel de aangetaste delen te vervangen (lamineren)."
        }
    },
    "Ornamenten restauratie": {
        "term": "Lijst- en stucwerk",
        "description": "Reconstructie van gipsornamenten en gevelstucwerk volgens originele mallen.",
        "tech_specs": {
            "Materiaal": "Gips / Kalkmortel",
            "Methode": "Trekken van lijsten / Mallen"
        },
        "faq": {
            "q": "Kunnen verdwenen plafondornamenten teruggebracht worden?",
            "a": "Ja, aan de hand van archieffoto's of sporen kunnen we profielen reconstrueren en nieuwe lijsten trekken."
        }
    },
    "Funderingstechniek": {
        "term": "Palenpest preventie",
        "description": "Onderzoek en herstel van houten paalfunderingen bij wisselende grondwaterstanden.",
        "tech_specs": {
            "Dreiging": "Houtaantasting / Palenpest",
            "Hersteltechniek": "Betonoplangers / Schroefinjectie"
        },
        "faq": {
            "q": "Is funderingsonderzoek schadelijk voor het pand?",
            "a": "Nee, we graven slechts een kleine proefsleuf (inspectieput) om de staat van de houten palen en het grondwaterpeil te beoordelen."
        }
    }
}

def generate_nuance(neighborhood_name, service_name, n_data, s_data):
    """Generates a unique expert advice paragraph."""
    street = random.choice(n_data["streets"])
    landmark = n_data["landmark"]
    
    context_lower = n_data['context'].lower().strip('.')
    issue_lower = n_data['common_issue'].lower().strip('.')
    desc_lower = s_data['description'].lower().strip('.')
    
    templates = [
        f"Gezien de {context_lower}, adviseren wij voor panden rondom {landmark} extra aandacht voor '{s_data['term']}'. De {issue_lower} vraagt om een specialistische aanpak die de historische waarde borgt.",
        f"In {neighborhood_name}, en specifiek in de omgeving van de {street}, is {s_data['term']} cruciaal. Vanwege de {issue_lower} is regulier onderhoud vaak niet afdoende. Onze expertise in {desc_lower} biedt hier de oplossing.",
        f"Voor monumenten in {neighborhood_name} ({landmark}) is de toepassing van '{s_data['term']}' essentieel om de authentieke uitstraling te behouden. Wij houden specifiek rekening met de {issue_lower} die in deze wijk veel voorkomt.",
        f"De combinatie van {s_data['term']} en kennis van de lokale situatie rondom {street} maakt onze aanpak uniek. Wij pakken de {issue_lower} bij de bron aan, gebruikmakend van {desc_lower}.",
        f"Specialistisch advies voor {neighborhood_name}: focus bij renovatie op '{s_data['term']}'. Zeker nabij {landmark} zien we vaak schade door {issue_lower}. Wij herstellen dit duurzaam met technieken zoals {desc_lower}."
    ]
    
    return random.choice(templates)

def generate_landing_pages():
    pages = []
    
    for n_name, n_data in neighborhoods.items():
        for s_name, s_data in services.items():
            nuance = generate_nuance(n_name, s_name, n_data, s_data)
            
            # Prepare strings
            issue_lower = n_data['common_issue'].lower().strip('.')
            
            # Meta description
            meta = f"Vind de top gecertificeerde specialisten voor {s_name} in {n_name}. Expert in {s_data['term']} en herstel van {issue_lower}. Vraag nu een inspectie aan."
            
            # AI Summary
            ai_summary = f"Gespecialiseerde {s_name.lower()} in {n_name} met focus op '{s_data['term'].lower()}' en het aanpakken van {issue_lower} nabij {n_data['landmark']}."

            # Technical Specs (Merge Service specs + Neighborhood specs)
            tech_specs = s_data['tech_specs'].copy()
            tech_specs.update(n_data['tech_context'])
            
            # FAQ Data (Include both Service FAQ and Neighborhood FAQ)
            faq_data = [s_data['faq'], n_data['faq']]
            
            page = {
                "neighborhood": n_name,
                "service": s_name,
                "title": f"Expert {s_name} in {n_name}, 's-Hertogenbosch | Monumentaal Onderhoud",
                "meta_description": meta,
                "ai_summary": ai_summary,
                "technical_specs": tech_specs,
                "faq_data": faq_data,
                "local_nuance": nuance,
                "keywords": [s_name, s_data['term'], n_name, "'s-Hertogenbosch", "Restauratie", "Monumenten"]
            }
            pages.append(page)
            
    return pages

if __name__ == "__main__":
    landing_pages = generate_landing_pages()
    
    output_file = "landing_pages.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(landing_pages, f, indent=4, ensure_ascii=False)
        
    print(f"Successfully generated {len(landing_pages)} expanded landing pages in {output_file}")
