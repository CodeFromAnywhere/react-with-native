# Model or no model for asset?

If we are going to work with a model, it will be hard to see what the asset is straight from the JSON since it just refers to the id. Also, the Assets are probably not going to be used anywhere else, except for in the media selector itself maybe, to find previous assets.

That is a problem however, because it will be extremely heavy and custom to search every db model for assets in there. But we need to do it anyway because if you add an asset without any ui, just by copying markdown, for example, because that will not be created in the asset model.

Hmmmm.... It's probably much easier attach it to hte model. Only objection would be performance. Let's try it first. Another good reason to attach it to the model directly is that you don't have any problems when accessing assets. it's completely authorized because the model you are accessing is authorized. You cannot access assets for models that you don't have access to.

Allright.... let's try without model.

# Implementation for progress for uploading

After some research, I came to the conclusion it's great to have upload progress for file upload.

Fetch has been trying to support ReadableStream, but it seems that it's not completely adopted yet, and also may never happen completely: https://github.com/whatwg/fetch/issues/1438

There are other ways though to show progress. It can be done with `axios`, but that would create a new dependency. As you can see here: https://stackoverflow.com/a/69400632, it seems that maybe the old fashioned and broadly supported `XMLHttpRequest` can easily do this. So why try to use any libraries or new stuff? Not needed....
