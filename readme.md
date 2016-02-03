# Flickr Photo Search

Implement a simple photo search using the [Flickr Public Feed](https://www.flickr.com/services/feeds/docs/photos_public/). 

#### Your Tasks

- Search Flickr public photos based on tags provided by users.
- Display the photos in 4 x 5 grid (note: at most, 20 photos will be returned).

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
        // YOUR DATA
      },
      dataType: 'jsonp',
      success: // YOUR CALLBACK
      error: // YOUR CALLBACK
    });
```

## Additional Resources
- [JSONP](http://json-p.org/)