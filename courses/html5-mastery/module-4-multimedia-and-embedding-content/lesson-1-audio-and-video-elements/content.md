### Introduction to HTML5 Multimedia
HTML5 brought native support for embedding audio and video directly into web pages, removing the need for third-party plugins like Flash.

### The `<audio>` Element

Used to embed sound content.

**Attributes:**
*   `src`: Path to the audio file.
*   `controls`: Displays the browser's default audio controls (play/pause, volume, progress bar).
*   `autoplay`: Starts playing automatically (often blocked by browsers for user experience).
*   `loop`: Loops the audio endlessly.
*   `muted`: Mutes the audio by default.
*   `preload`: Hints to the browser about how to load the audio (`none`, `metadata`, `auto`).

**Multiple Sources (`<source>`):** Provides different audio formats for browser compatibility (browsers play the first supported format).

**Common formats:** `.mp3`, `.wav`, `.ogg`.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Audio Element</title>
    <style>
        audio { width: 80%; max-width: 500px; margin: 20px auto; display: block; }
    </style>
</head>
<body>
    <h1>My Music Player</h1>
    <audio controls>
        <source src="audio/sample.mp3" type="audio/mpeg">
        <source src="audio/sample.ogg" type="audio/ogg">
        Your browser does not support the audio element.
    </audio>
    <p>Listen to a sample track above.</p>
    <p>If your browser doesn't support MP3 or OGG, you'll see the fallback message.</p>
</body>
</html>
```
**Explanation:** Always provide fallback content for browsers that don't support the `<audio>` tag or the specified formats. For actual use, you'd replace `audio/sample.mp3` with your actual file paths.

### The `<video>` Element

Used to embed video content.

**Attributes:**
*   `src`: Path to the video file.
*   `controls`: Displays browser's default video controls.
*   `autoplay`, `loop`, `muted`, `preload`: Similar to audio.
*   `width`, `height`: Sets video dimensions (better to use CSS for responsiveness).
*   `poster`: URL of an image to display before the video starts playing.

**Multiple Sources (`<source>`):** Provides different video formats for browser compatibility.

**Common formats:** `.mp4`, `.webm`, `.ogg`.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Video Element</title>
    <style>
        video { width: 100%; max-width: 700px; height: auto; display: block; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; }
    </style>
</head>
<body>
    <h1>My Awesome Video</h1>
    <video controls poster="https://placehold.co/600x400?text=Video+Poster">
        <source src="video/sample.mp4" type="video/mp4">
        <source src="video/sample.webm" type="video/webm">
        Your browser does not support the video tag.
    </video>
    <p>Watch a short demo video above.</p>
</body>
</html>
```
**Explanation:** The `poster` attribute provides a visual cue before the video loads. Like audio, include multiple sources and fallback content.

### `<track>` element (for captions/subtitles)

The `<track>` element provides text tracks (like subtitles, captions, descriptions) for `<audio>` and `<video>` elements.

**Attributes:**
*   `kind`: Type of track (`subtitles`, `captions`, `descriptions`, `chapters`, `metadata`).
*   `src`: Path to the WebVTT file (`.vtt`).
*   `srclang`: Language of the track.
*   `label`: Title of the track shown to the user.
*   `default`: Specifies that the track is the default.

**Detailed Example (Conceptual - requires a `.vtt` file):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Video with Captions</title>
</head>
<body>
    <video controls width="640" height="360" poster="https://placehold.co/640x360?text=Video+Poster">
        <source src="video/my_video.mp4" type="video/mp4">
        <track kind="captions" src="captions_en.vtt" srclang="en" label="English" default>
        <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish">
        Your browser does not support the video tag.
    </video>
    <p>This video includes English captions and Spanish subtitles.</p>
</body>
</html>
```
**Explanation:** `<track>` improves accessibility for users who are deaf or hard of hearing, or those who prefer to watch content with captions.

### Exercise: Create a Media Player Page

1.  Create an HTML file `media_player.html`.
2.  Include an `<audio>` element with `controls` and a dummy `src` (e.g., `audio/your_song.mp3`). Provide a fallback message.
3.  Below it, include a `<video>` element with `controls`, a `poster` image, and a dummy `src` (e.g., `video/your_movie.mp4`). Provide a fallback message.
4.  **Bonus:** If you have actual audio/video files, use multiple `<source>` tags for different formats.

### Helpful Links:

*   [MDN Web Docs: The Audio element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
*   [MDN Web Docs: The Video element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
*   [WebVTT format (for captions)](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API)
