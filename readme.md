# Flickr Photo Search

Implement a simple photo search using the [Flickr Public Feed](https://www.flickr.com/services/feeds/docs/photos_public/). 

#### Your Tasks

- Search Flickr public photos based on `tags` and `tag mode` provided by users.
- Display the photos in a 5x4 grid (note: at most, 20 photos will be returned).

#### Configurations
- Use this url in your `ajax` request:
```
https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?
```
- In your `ajax` call, use `jsonp` as your data type.
- For example:
```javascript
    $.ajax({
      url: "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
      data: {
        format: 'json'
        // YOUR PARAMETERS
      },
      dataType: 'jsonp',
      success: // YOUR CALLBACK
      error: // YOUR CALLBACK
    });
```

#### Bonus
- When a user clicks on an image, display a Bootstrap `modal` which displays the photo plus additional details returned from the public feed.

## Additional Resources
- [JSONP](http://json-p.org/)
- [Bootstrap Select](https://silviomoreto.github.io/bootstrap-select/)
