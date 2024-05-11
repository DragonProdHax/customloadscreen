var canspotifymove = false;

var spotifydiv = document.createElement('div');
spotifydiv.id = 'spotifydiv';
spotifydiv.style.cssText = 'top:0; left:0; display:flex; position:fixed; cursor: move; z-index:99; width:fit-content; height:fit-content;'

var dragicon = new Image();
dragicon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABXRSTlMAIOCAwGtcI9QAAAJKSURBVHja7NexicNAFEVRiW1AuIMJnC/sdrAdGH7/rWx4Awdf8+DKBs9LHVyOsUejbW1tbe0jth+bv9vY9O33h0+5VWkUIFUeBYhIAeJRgIgUIB4FiEgB4lGAiBQgHgWISAHiUYCIFCAeBYhOAQJFhEAxIVBECBQTAkWEQDEhUEQIFBMCRYRAMSFQRAgUEwJFhEAxIVBECBQTAkWEQDEhUASIehh/VbHvbWMrsiIrsiJvEtnnI8f88TsfGdOQ+3zkccxCaj5SYxaSRKCchCSRGnOQKALlHCSL1JiBZBEopyBpBEoPiSNQekgagdJD4giUHpJGoPSQOAKlh8QRKC0kj0BpIXkESgvJI1BaSB6B0kPyCJQekkeg9JA8AqWH5BEoPSSPQOkh9fO03yr29/x59RQg+XoKEJZvmBAoIgSKCYEiQqCYECgiBIoJgSJCoJgQKD4Eih/xvy6fMi7/Cft/Rv9Y8Q9I/6jXKeOix69OGZdfifzLnX9N9S/c/quD/xL0+te5/3bO4AZgGISBs7D/kp2AQEOk+hqzAPITm/Ohw1ThxD5iFmjYHgcMHBUramyq6diDQ6NTybIdmc9aNvogEFCLNrZDGr24aTM4U4wAt8JMzVj2Pym2l3iJl1y4pPfYR3hR7EgJxttoLSUor7yVlOC8V6+lBOnlfSUlWBhCLiVoaEgmJXi4Tgoe8RCqFAbjYW0LQI+GGhbQJAn/LEFWDpLbgYshmHQP+Eag610IH1An0C5G0K946JdVyNduvCgQUa9C8Xg8nu/nAfm2beeMPHRlAAAAAElFTkSuQmCC";
dragicon.draggable = false;
dragicon.style.cssText = 'display:flex; position:relitive; width:10%; z-index:99'
spotifydiv.appendChild(dragicon);

document.querySelector("#game-wrapper").appendChild(spotifydiv);

let offsetX, offsetY;

const spotifymove = (e) => {
    if (canspotifymove){
        spotifydiv.style.left = `${e.clientX - offsetX}px`
        spotifydiv.style.top = `${e.clientY - offsetY}px`
    }
}

document.addEventListener('mousemove', spotifymove)

spotifydiv.addEventListener('mousedown', (e) => {
    offsetX = e.clientX - spotifydiv.offsetLeft;
    offsetY = e.clientY - spotifydiv.offsetTop;

    canspotifymove = true;
})

spotifydiv.addEventListener('mouseup', () => {
    canspotifymove = false;
});

var spotifyHolder = document.createElement("iframe");
spotifyHolder.src = "..%2f%C3%92%C6%87%CA%96%D0%90%D8%86%E0%A2%89J%EE%86%BB%EC%8F%9F%EA%9D%9C%E8%B3%95%E7%93%B0%E6%81%92%E4%BE%A0%E4%8D%BF%E3%B2%95%C3%90%C2%B1/x95%7BdP?0";
spotifyHolder.style.cssText = 'display:flex; position:fixed; height:80px; border:none; margin:0; padding:0; overflow:hidden;';
spotifydiv.appendChild(spotifyHolder);

spotifyHolder.onload = function() {
    var spotifyFrame = document.createElement("iframe");


    top.playlist = {}
    
    Object.defineProperties(top.playlist, {
        set: {
            value: function(value) {
                top.localStorage.setItem('playlistid', value);
                spotifyFrame.src = `https://open.spotify.com/embed/playlist/${value}?theme=0`;
            }
        },
        get: {
            value: function() {
                return top.localStorage.getItem('playlistid');
            }
        }
    });

    spotifyFrame.src = `https://open.spotify.com/embed/playlist/${top.playlist.get()}?theme=0`;
    spotifyFrame.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    spotifyFrame.style = 'position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;';
    spotifyHolder.contentDocument.documentElement.innerHTML = "";
    spotifyHolder.contentDocument.body.appendChild(spotifyFrame);
};