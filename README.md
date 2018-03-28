<img src="https://github.com/dwebster17/Spinn/blob/master/app/assets/images/Logo-black.png" alt="Spinn Logo" width= "75" height="75px"/>

# Spinn 

>[Live Demo](https://www.google.com "Google's Homepage")

Spinn is a music streaming website inspired by Spotify. It makes use of Rails/PostgreSQL on the backend, and React.js/Redux on the client. This project also leverages Amazon AWS file-hosting for all music and media data. 

Spinn was initially planned, designed, and built in the span of 10 days. Over time, I've had the opportunity to add addtional advanced features and functionality. 

---
## Features
### Core 
+ Custom frontend to backend user authentication using BCrypt.
+ Users can explore site-generated content by albums, artists, genres, or playlists
+ Songs can be saved or removed from a collection at any time 
+ Users can create, edit, delete, and share playlists
+ Fully customized media bar with play, pause, seek, shuffle, repeat, and volume control 
+ Users can follow playlists, artists, and other users. 
+ User pages show which playlists they've created, and which other users they are following/are followed by
+ Search for users, playlists, songs, albums, and artists all in one query

### Advanced 
+ Playlist images are dynamically generated on the backend based on the contents of the playlist. 
+ Background color for album and playlist pages update based on the most common color found in playlist's artwork
+ Search returns a "Top Result" based on the match significance found in the application's backend 
+ Smooth image loading, with placeholder image, created with a customized React component that doesn't render until the image data is fully fetched. 

---

## Reactive Media Playback
