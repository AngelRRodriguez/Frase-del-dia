$(function () {
    var messages = [],
        index = 0;

    messages.push('Everyone has a different and unique tongueprint, <br> just like fingerprints.');
    messages.push('Light can travel as slow as 38mph and not <br> necessarily at light speed.');
    messages.push('Mathenoglobinemia is a mutation that gives <br> people blue skin.');
    messages.push('Sea levels rising is not caused by the melting <br> of floating icebergs.');
    messages.push('The Eiffel Tower heats up so much during summer <br> that it expands 7 inches.');
    messages.push('The lenght of all your blood vessels and veins <br> combined would circle the world twice');
    messages.push('Bananas are curved because, like sunflowers, they <br> grow towards the sun.');
    messages.push('Trailers were called such because they were originally <br> presented after the movie as a reminder.');
    messages.push('There is a type of jellyfish that never dies and can regenerate.');


    function cycle() {
        $('#mensaje-cambiante').html(messages[index]);
        index++;

        if (index === messages.length) {
            index = 0;
        }

        setTimeout(cycle, 5500);
    }

    cycle();
});
