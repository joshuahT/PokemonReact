import React, { useState, useEffect } from 'react';



const Pokedex = () => {
    let randomNum = (Math.floor(Math.random() * 150)) + 1;




    const [imageUrl, setImageUrl] = useState(null);




    const handleClick = (e) => {
        const res = fetch(`http://localhost:8080/pokemon/${randomNum}`);
        e.preventDefault();
        res.then((promise) => {
            promise.json()
                .then((response) => {
                    console.log(response['url'], response['name']);
                    setImageUrl(response['url']);

                })
        })


    }
    return (
        <div class="pokedex__container"><button onClick={handleClick} class="grab" title="Change Pokémon"></button>
            <img src={imageUrl} alt="pokemon" class="pokedex__image" transform="translate(-114px, 150px)" height="150" width="150" x="1" y="-3" />

            <div class="pokedex__flash"></div><svg class="pokedex__base" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.8721 112.4479">
                <g transform="translate(148.5737 -96.5143)">
                    <rect class="pokedex__inner-panel" ry="0" y="96.5143" x="-148.4867" height="112.4479" width="80.6979" stroke-width="1.3229" stroke-linecap="round" stroke-linejoin="round"></rect>
                    <path class="pokedex__shadow" d="M-97.795 101.0322l-11.145.1741h-32.476c-3.5989 0-6.4963 2.8969-6.4963 6.4958v23.2699h38.9723l11.145-13.991h29.4319v-15.9488h-6.5738z"></path>
                    <path class="pokedex__shadow" d="M-80.927 97.1758v111.125h12.0799V97.1757h-6.4962z"></path>
                    <path class="pokedex__outer-panel" d="M-45.9736 97.308v111.125h9.5379V97.308h-6.4962z" stroke-width="1.3229" stroke-linecap="round" stroke-linejoin="round" transform="matrix(.9997 0 0 1.00502 -31.3657 -.6192)"></path>
                    <g transform="matrix(.9997 0 0 1.00502 .639 -.4863)">
                        <path class="pokedex__shine" d="M-78.1205 97.1757v111.125h3.3908V97.1757h-2.3094z"></path>
                        <path class="pokedex__outline" d="M-77.9882 97.1757v111.125h9.538V97.1757h-6.4963z" fill="none" stroke-width="1.3229" stroke-linecap="round" stroke-linejoin="round"></path>
                        <rect class="pokedex__outline" width="9.5537" height="3.7956" x="-77.9961" y="189.4617" ry="0" fill="none" stroke-width="1.3072" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <rect class="pokedex__outline" ry="0" y="128.6232" x="-77.9961" height="3.7956" width="9.5537" fill="none" stroke-width="1.3072" stroke-linecap="round" stroke-linejoin="round"></rect>
                    </g>
                    <g transform="translate(-13.25 -7.9432)">
                        <path class="pokedex__screen-surround" d="M-127.138 141.8578v31.933l6.0368 13.2353h49.9039v-45.1683z" stroke-width="1.7452" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path class="pokedex__main-screen" stroke-width="1.1079" stroke-linecap="round" stroke-linejoin="round" d="M-118.4059 148.0342h38.4762v26.4656h-38.4762z"></path>
                        <circle class="pokedex__standby-light" cx="-115.3879" cy="180.4871" r="2.9104" stroke-width="1.323" stroke-linecap="round" stroke-linejoin="round"></circle>
                        <path class="pokedex__speaker-grill" d="M-87.617 178.1058h7.4084M-87.617 180.7516h7.4084M-87.617 183.3974h7.4084" fill="none" stroke="#000" stroke-width="1.3229"></path>
                        <circle class="pokedex__screen-notch" cx="-104.4593" cy="145.0329" r=".7937"></circle>
                        <circle class="pokedex__screen-notch" r=".7937" cy="145.0329" cx="-93.876"></circle>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png" alt="pokemon" class="pokedex__image" transform="translate(-114, 150)" height="250" width="2" x="1" y="-3" />
                        <path class="pokedex__shine-reduced" d="M-110.2 148.0342l-8.2058 11.7812v6.0187l12.3972-17.8zM-104.0738 148.0342l-14.332 20.577v5.8886h10.4087l18.433-26.4656z" fill="#fff"></path>
                    </g>
                    <g class="pokedex__main-button" transform="translate(-13.25 -10.1882)">
                        <circle r="6.0854" cy="201.6537" cx="-121.2638" stroke-width="1.3229" stroke-linecap="round" stroke-linejoin="round"></circle>
                        <path d="M-121.264 195.5682a6.0854 6.0854 0 00-6.0854 6.0855 6.0854 6.0854 0 00.2837 1.8138 6.0492 7.2064 0 004.7077 2.684 6.0492 7.2064 0 005.9531-5.9665 6.0492 7.2064 0 00-1.5074-3.6054 6.0854 6.0854 0 00-3.3517-1.0114z"></path>
                        <circle cx="-121.2638" cy="201.6537" r="6.0854" fill="none" stroke-width="1.3229" stroke-linecap="round" stroke-linejoin="round"></circle>
                    </g>
                    <g class="pokedex__option-button pokedex__option-button--red" transform="translate(38.4696 1.4113)">
                        <rect ry="1.4653" y="181.8065" x="-162.6102" height="2.9305" width="11.1105" stroke-width="1.3229" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <rect width="11.1105" height="1.2467" x="-162.6102" y="183.4903" ry=".6234"></rect>
                        <rect width="11.1105" height="2.9305" x="-162.6102" y="181.8065" ry="1.4653" stroke-width="1.3229" stroke-linecap="round" stroke-linejoin="round"></rect>
                    </g>
                    <g class="pokedex__option-button pokedex__option-button--green" transform="translate(54.3446 1.4113)">
                        <rect width="11.1105" height="2.9305" x="-162.6102" y="181.8065" ry="1.4653" stroke-width="1.3229" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <rect ry=".6234" y="183.4903" x="-162.6102" height="1.2467" width="11.1105"></rect>
                        <rect ry="1.4653" y="181.8065" x="-162.6102" height="2.9305" width="11.1105" stroke-width="1.3229" stroke-linecap="round" stroke-linejoin="round"></rect>
                    </g>
                    <g transform="translate(-3.7084 -42.3675)">
                        <path class="pokedex__dpad" d="M-89.5603 229.281a.9641.9641 0 00-.9664.9663v2.9362h-2.9357a.9646.9646 0 00-.9669.9664v3.2835c0 .5355.4314.9664.9669.9664h2.9357v2.9362c0 .5355.431.9664.9664.9664h3.284a.9641.9641 0 00.9664-.9664v-2.9362h2.9357a.9646.9646 0 00.9669-.9664V234.15a.9646.9646 0 00-.9669-.9664h-2.9357v-2.9362a.9641.9641 0 00-.9664-.9664z" stroke-width="1.3229" stroke-linecap="round" stroke-linejoin="round"></path>
                        <circle class="pokedex__dpad-middle" r="1.3229" cy="235.7916" cx="-87.9183"></circle>
                    </g>
                    <g transform="translate(-13.25 -10.1882)">
                        <rect class="pokedex__mini-screen" ry="1.8165" y="200.3798" x="-110.8803" height="9.7433" width="22.2963" stroke-width="1.3229" stroke-linecap="round" stroke-linejoin="round"></rect>
                        <path class="pokedex__shine" d="M-99.732 207.5716a11.0382 3.7418 0 00-10.2113 2.3255c.2604.1438.56.2258.8796.2258h18.663c.3188 0 .618-.0817.8779-.2248a11.0382 3.7418 0 00-10.2092-2.3265z"></path>
                        <rect class="pokedex__mini-screen-outline" width="22.2963" height="9.7433" x="-110.8803" y="200.3798" ry="1.8165" fill="none" stroke-width="1.3229" stroke-linecap="round" stroke-linejoin="round"></rect>
                    </g>
                    <rect class="pokedex__outline" fill="none" ry="0" y="96.5143" x="-148.4867" height="112.4479" width="80.6979" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></rect>
                    <g>
                        <path class="pokedex__shine" d="M-148.482 96.519v29.9305h39.5305l11.3047-13.9866h29.8534v-15.944h-29.8534z" stroke="none" stroke-width="1.3322" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path class="pokedex__outer-panel" d="M-146.8948 98.1064v28.343h37.9434l11.3048-13.9867h29.8535V98.1064h-28.266z" stroke-width="0" transform="translate(1, 1)"></path>
                        <path class="pokedex__outline" d="M-148.482 96.519v29.9305h39.5305l11.3047-13.9866h29.8534v-15.944h-29.8534z" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        <g>
                            <g transform="matrix(.85677 0 0 .85677 11.8315 15.2612)">
                                <circle r="11.9063" cy="113.5067" cx="-169.0352"></circle>
                                <g class="pokedex__big-blue" transform="translate(-79.1172 -28.3928)">
                                    <circle cx="-90.3628" cy="141.0601" r="11.9063"></circle>
                                    <path d="M-102.2692 141.0601a11.9062 11.9062 0 0011.9062 11.9063A11.9062 11.9062 0 00-78.4567 141.06z"></path>
                                    <circle class="pokedex__shine" cx="-90.3628" cy="141.0601" r="10.0542"></circle>
                                    <circle class="pokedex__outline" r="9.0147" cy="141.0601" cx="-90.3628"></circle>
                                    <circle cx="-90.3628" cy="141.0601" r="7.9375"></circle>
                                    <path d="M-90.363 133.1226a7.9375 7.9375 0 00-7.9375 7.9375 7.9375 7.9375 0 003.2965 6.4301 8.8061 8.472 0 002.3027.3044 8.8061 8.472 0 008.8062-8.4718 8.8061 8.472 0 00-1.122-4.1171 7.9375 7.9375 0 00-5.3459-2.083z"></path>
                                    <circle class="pokedex__shine-reduced" cx="-91.9407" cy="140.9146" r="1.2027" fill="#fff"></circle>
                                    <circle class="pokedex__shine-reduced" cx="-93.678" cy="137.1728" r="2.1382" fill="#fff"></circle>
                                </g>
                            </g>
                            <g transform="translate(44.7614 -41.7732)">
                                <circle class="pokedex__mini-light-outline" cx="-151.0342" cy="144.9505" r="2.6458"></circle>
                                <g transform="translate(30.0611 -32.7338)">
                                    <circle class="pokedex__mini-light pokedex__mini-light--green" r="1.9844" cy="177.6843" cx="-181.0953"></circle>
                                    <circle class="pokedex__shine-reduced" r=".6615" cy="177.4036" cx="-181.6164"></circle>
                                </g>
                            </g>
                            <g transform="translate(38.347 -41.7732)">
                                <circle class="pokedex__mini-light-outline" r="2.6458" cy="144.9505" cx="-151.0342"></circle>
                                <g transform="translate(30.0611 -32.7338)">
                                    <circle class="pokedex__mini-light pokedex__mini-light--amber" cx="-181.0953" cy="177.6843" r="1.9844"></circle>
                                    <circle class="pokedex__shine-reduced" cx="-181.6164" cy="177.4036" r=".6615"></circle>
                                </g>
                            </g>
                            <g transform="translate(31.9324 -41.7732)">
                                <circle class="pokedex__mini-light-outline" cx="-151.0342" cy="144.9505" r="2.6458"></circle>
                                <g transform="translate(30.0611 -32.7338)">
                                    <circle class="pokedex__mini-light pokedex__mini-light--red" r="1.9844" cy="177.6843" cx="-181.0953"></circle>
                                    <circle class="pokedex__shine-reduced" r=".6615" cy="177.4036" cx="-181.6164"></circle>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>

    );
}

export default Pokedex;