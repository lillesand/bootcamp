/*
    Oppgave

    Vurder alle kommentarene i denne fila. 
    Hvilke er gode og nødvendige kommentarer?
    Hvilke kan vi klare oss uten?
    
    Gjør endringer i koden slik at du kan fjerne så mange kommentarer som 
    mulig men fortsatt ha like god lesbarhet!
    Så lenge koden funksjonelt gjør det samme er alt lov.
*/



/**
 * Created by Guybrush Threepwood on 30/07/16.
 *
 * Registered under MIT License, see @http://opensource.org/licenses/MIT
 */

// this script splits the directory file
function dirFile(path) {

    // the directory
    directory = null;
    // the file
    file = null;

    // assumes a validated full path
    if (path != null)
    {
        var length = path.length;
        var rootLength = getRootLength(path);

        // ignore a trailing slash
        if (length > rootLength && endsInDirectorySeparator(path))
            length--;

        // find the pivot index between end of string and root
        for (var pivot = length - 1; pivot >= rootLength; pivot--) {
            if (isDirectorySeparator(path[pivot])) {
                directory = path.substr(0, pivot);
                file = path.substr(pivot + 1, length - pivot - 1);
                
            }
        }

        // no pivot, return just the trimmed directory
        if (!directory) {
            directory = path.substr(0, length);
        }
        
        return {
            file: file,
            directory: directory
        };
    }
    // TODO: handle non-validated paths

}
