var config = {
    style: 'mapbox://styles/hbenzz/clalb131g001214qulig6uzbu',
    accessToken: 'pk.eyJ1IjoiaGJlbnp6IiwiYSI6ImNsYTB3cHE5YjAxcnIzb29qYWNrcXlxbnYifQ.8SX1brHjGaH-xtxEt1uywg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'What traffic accidents tell us about Brussels',
    subtitle: 'Everyday, we make decisions regarding our transportation. We take a bike, a car, public transportation and cross several crosswalks. All those expose us to the danger of traffic. Traffic safety is therefore of great importance to our lives. Yet it remains difficult to manage and it is still on the forefront of several political discussions. \n The piétonnier and Good Move Brussels are political plans and decisions that are still at the forefront of public debates and are sometimes even subjected to citizen protests. Without going into those plans and debates, how could we have a better view on the situation of traffic safety? How can we then see where the issue is situated? \n To have a view on this, we decided to analyze the localization of accidents with injured and or deaths. By comparing their occurence in the Brussels communes and exploring their exact locations, we tried to make them tell us part of the story of the traffic safety of the Brussels Region.',
    byline: 'by Houda Ben Azzouz',
    footer: 'Data source: <a href="https://ibsa.brussels/themes/securite/securite-routiere" target="_blank">IBSA.Brussels</a> & the Belgian Federal Police. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'CommunesIntro',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'As you may know, the Brussels Region is composed of 19 communes, all managed by one mayor. The management of each road depends on its localization and can therefore be the responsibility of either a commune or the Brussels-Capital Region.',
            location: {
              center: [4.49657, 50.84169],
              zoom: 11,
              pitch: 15.65,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {
                 layer: 'Communes',
                 opacity: 1,
               },
               {
                 layer: 'Communes21',
                 opacity: 0,
               },
               {
                 layer: 'Bxl Cap Ixl',
                 opacity: 0,
               },
               {
                 layer: 'Ixelles',
                 opacity: 0,
               },
               {
                 layer: 'Accidents',
                 opacity: 0,
               },
               {
                 layer: 'Zones Police',
                 opacity: 0,
               },
               {
                 layer: 'Pietonnier',
                 opacity: 0,
               },
               {
                 layer: 'flagey',
                 opacity: 0,
               }
            ],
            onChapterExit: [
              {
                layer: 'Communes',
                opacity: 0.3,
              }
            ]
        },
        {
            id: 'PZIntro',
            alignment: 'right',
            hidden: false,
            title: 'Police Zones',
            image: '',
            description: 'The 19 communes of the Brussels-Capital Region are divided into 7 Police Zones. Each zone is managed by the mayor(s) of the communes composing them. Once an accident occurs, and depending on its localization, it might be managed by a Local Police Zone (communal/local level) or the Federal Police (regional or national level) which can most certainly be confusing. Data related to traffic accidents is, however, still centralized by the Federal Police. This data will be at the center of our story.',
            location: {
              center: [4.49657, 50.84169],
              zoom: 11,
              pitch: 15.65,
              bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'Zones Police',
                opacity: 1,
              },
              {
                layer: 'Accidents',
                opacity: 0,
              }
            ],
            onChapterExit: [
              {
                layer: 'Zones Police',
                opacity: 0.4,
              }
            ]
        },
        {
            id: 'TotalCommunesIntro',
            alignment: 'right',
            hidden: false,
            title: 'General Overview',
            image: '/Users/houda/Documents/MIND3/Ateliers/Data/Coding/storytelling-main/src/images/MapEvolution.gif',
            description: 'As you may guess, the communes aren’t equal when it comes to traffic safety. This is what the data of the total number of injured per km of road tell us. Those show quite clearly where the most problematic areas are located. The communes within the Bruxelles-Capitale-Ixelles Police Zone are where the most injuries occur. This tendency was present before the creation of the Pedestrian Zone and didn’t get better after. The South of Brussels with Uccle, Watermael-Boitsfort and Auderghem are the safest and this tendency was also present before 2015. The numbers for those communes are also getting slightly better with time.',
            location: {
              center: [4.45588, 50.83383],
              zoom: 11.56,
              pitch: 15.65,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'Communes21',
                opacity: 0.6,
              },
              {
                layer: 'Zones Police',
                opacity: 0.6,
              },
              {
                layer: 'Communes',
                opacity: 0.5,
              },
              {
                layer: 'Accidents',
                opacity: 0,
              }
            ],
            onChapterExit: [
              {
                layer: 'Communes21',
                opacity: 0,
              }
            ]
        },
        {
            id: 'FocusBruCap',
            alignment: 'right',
            hidden: false,
            title: 'Bruxelles-Capitale-Ixelles',
            image: '',
            description: 'Now let’s focus of the Bruxelles-Capitale-Ixelles Police Zone (BruCap) with the commune of Bruxelles-Capitale and Ixelles. This zone seems to have the highest number of injured, ever since 2015. Why is that?',
            location: {
              center: [4.45588, 50.83383],
              zoom: 11.56,
              pitch: 15.65,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'Bxl Cap Ixl',
                opacity: 0.6,
              },
              {
                layer: 'Accidents',
                opacity: 0,
              }
            ],
            onChapterExit: []
        },
        {
            id: 'PietonnierIntro',
            alignment: 'right',
            hidden: false,
            title: 'Pietonnier',
            image: '',
            description: 'In one of the second most accident prone communes of Brussels, Brussels-Capitale, we’ll find a major pedestrian zone. This pedestrian zone (Pietonnier) was first introduced in 2015 after protests of residents demanding a safer and calmer city center. \n Now, does the creation of a pedestrian zone impact traffic safety? Is there a link between an auto-free zone and number of accidents with injuries? If not, what would be the causes of traffic accidents in Brussels?',
            location: {
              center: [4.45588, 50.83383],
              zoom: 11.56,
              pitch: 15.65,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'Pietonnier',
                opacity: 1,
              }
            ],
            onChapterExit: [
              {
                layer: 'Pietonnier',
                opacity: 0.3,
              },
              {
                layer: 'Bxl Cap Ixl',
                opacity: 0.1,
              },
              {
                layer: 'Zones Police',
                opacity: 0,
              },
              {
                layer: 'Communes',
                opacity: 0,
              }
            ]
        },
        {
            id: 'FocusBruCapAccidentsR20',
            alignment: 'right',
            hidden: false,
            title: 'R20',
            image: '',
            description: 'If we analyze the accidents and their localization (yellow circles), we can see a correlation between the small Ring (R20) and the accidents with injuries. The R20 being located into the commune of Brussels-Capitale, it could partly explain the higher numbers. Zooming in on this R20 road, another interesting aspect of it would be the speeding allowed on it. Indeed, we can see how the roads with the most accidents are also the ones allowing a speed of 50+ km/h (orange roads). This shows us how speed an important factor is in provoking accidents with injuries.',
            location: {
              center: [4.37283, 50.84563],
              zoom: 13.69,
              pitch: 32.65,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'Accidents',
                opacity: 1,
              }
            ],
            onChapterExit: [
              {
                layer: 'Ville30',
                opacity: 0.7,
              }
            ]
        },
        {
            id: 'FocusBruCapAccidentsPietonnier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'However, speeding doesn’t explain everything. If we focus on the area inside the R20, we can still see how the roads connecting the north and south part of the R20 still have a lot of injuries on the road occurring. Those may be pushed aside by the pedestrian zone (Piétonnier), but this clearly doesn’t create an accident free area. On the contrary, those still occur around but also on the pedestrian zone.',
            location: {
              center: [4.36408, 50.84641],
              zoom: 14.36,
              pitch: 0.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
              {
                layer: 'Ville30',
                opacity: 0,
              },
              {
                layer: 'Accidents',
                opacity: 0,
              },
              {
                layer: 'Bxl Cap Ixl',
                opacity: 0,
              },
              {
                layer: 'Pietonnier',
                opacity: 0,
              }
            ],
        },
        {
            id: 'FocusIxellesIntro',
            alignment: 'right',
            hidden: false,
            title: 'Ixelles',
            image: '',
            description: 'Now let’s focus on the second commune of the Police Zone BruCap, Ixelles. The geography of Ixelles is in itself very interesting as it’s being split in two by the Avenue Louise to allow easy access from Brussels city centre to the popular recreational area of the Bois de la Cambre. Ixelles is, in the BruCap Police Zone but also in the whole Brussels Region, where the most injuries occur.',
            location: {
              center: [4.39838, 50.81769],
              zoom: 13.38,
              pitch: 21.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'Ixelles',
                opacity: 0.5,
              }
            ],
            onChapterExit: [
              {
                layer: 'Accidents',
                opacity: 1,
              },
              {
                layer: 'Ixelles',
                opacity: 0.1,
              }
            ]
        },
        {
            id: 'FocusIxellesAccidents',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: '/Users/houda/Documents/MIND3/Ateliers/Data/Coding/storytelling-main/src/images/EvolutionIxelles.gif',
            description: 'We can see how Ixelles (red bar on this barchart) slowly evolved as one of the most dangerous during those 5 past years. The situation only got worse in 2021 with 438 injured, 16 heavily. This makes the roads of this commune the most accident prone in Brussels. But what explains those numbers?',
            location: {
              center: [4.39838, 50.81769],
              zoom: 13.38,
              pitch: 21.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'Ville30',
                opacity: 0.7,
              },
            ],
            onChapterExit: []
        },
        {
            id: 'FocusIxellesAccidentsZoom',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'We see quite a lot of long important roads going through this small elongated commune. Especially on the right part.The first thing we can see is that the number of accidents seem to rise the more we near the R20. Avenue Louise (situated in de commune of Brussels), Chaussée d’Ixelles and Rue de Trone being the most important vectors of accidents. Besides the tunnels on the Avenue Louise, those roads have a speed limit of 30, so speed can’t explain this rise.',
            location: {
              center: [4.37792, 50.82762],
              zoom: 14.64,
              pitch: 49.50,
              bearing: -8.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'FocusIxellesJacques',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'The speed limit may, however, partly explain the cluster of accidents we find on the Boulevard General Jacques that crosses through the lower part of Ixelles.',
            location: {
              center: [4.39394, 50.82078],
              zoom: 14.38,
              pitch: 21.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'FocusIxellesR21',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'This Boulevard is part of the R21 (Grande Ceinture) that connects Ixelles with Etterbeek and Auderghem. With a speed limit of 50km/h this very crucial road with a heavy flow of vehicles can only be accident prone.',
            location: {
              center: [4.41880, 50.83978],
              zoom: 13.21,
              pitch: 32.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'FocusIxellesFlagey',
            alignment: 'right',
            hidden: false,
            title: 'Flagey',
            image: '',
            description: 'Interestingly, the place that comes to the mind of the locals when in comes to Ixelles and traffic issues is Place Flagey. It’s often described as a very problematic intersection. The speed limit being 30km/h all around this area, speed wouldn’t explain the location of a lot of accidents in this area. The first hypothesis would be the connexion it forms. Place Flagey is an important intersection between the Rue de Trone / Avenue de la Couronne and the tunnels of the Avenue Louise. The flow of vehicles going through around Place Flagey is therefore heavy. Its complexity makes it also difficult to navigate, which can explain some accidents.',
            location: {
              center: [4.37778, 50.82766],
              zoom: 15.40,
              pitch: 34.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'flagey',
                opacity: 1,
              }
            ],
            onChapterExit: [
              {
                layer: 'Ixelles',
                opacity: 0,
              },
              {
                layer: 'Ville30',
                opacity: 0,
              },
              {
                layer: 'flagey',
                opacity: 0,
              },
              {
                layer: 'Accidents',
                opacity: 0,
              }
            ]
        },
        {
            id: 'Conclusion',
            alignment: 'fully',
            hidden: false,
            title: 'Conclusion',
            image: '',
            description: 'Flagey is therefore a place that tells us a story that can be extrapolated to all the region. When navigating through the accidents in Brussels, not only speed but traffic regulation and structure may play a crucial role in reducing the number of accidents. A global view is of great importance. One change in one street or one commune may just push the problem away to another, as the City Center’s Pietonnier shows us. A further analysis of the evolution of traffic flow, the interconnectivity between the problematic areas and a holistic approach in problem solving is therefore crucial.',
            location: {
              center: [4.37986, 50.84814],
              zoom: 11,
              pitch: 15.65,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
}
;
