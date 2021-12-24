---
layout: post
title: The New Crew Craft Website
description: Take a look at the process of designing the new Crew Craft Server website. Compare the flaws of the old site to the solutions of the new one and how it was achieved.
author: Matt
tags: [Website, Development]
---
After years of the same site, I finally put some much needed attention into the Crew Craft Server website. This new site has taught me a lot about web design and I'm excited to continue implementing new features on it to give you guys the best exerpeience possible.<!--more-->

#### The Old Website
The original CCS website was my initial learning of HTML and CSS. For those not well versed in how websites are made, HTML is the structure of the site: the words, lists and links. CSS is the style of the site: colors, fonts, borders and shadows. At the time, I knew nothing about coding a website and learned as I went, ending up with something functional. 

![Old Crew Craft Server Website](/assets/images/posts/2019-08-26-old-site.jpg)

To me, this design looks quite dated and amateur now. In addition, the news page was coded in straight up HTML, so I'd have to edit the actual web page file in order to add another news update. This is fine (albeit inconvenient) for a few posts but if I were to have dozens, the page would get very long and have no organization. Also, the statistics page no longer functions as the server doesn't use that plugin. There are also dead links to Skype (who uses that anymore?) and Twitter, which I'm unsure if I'll keep using as I rarely ever do anyway.

#### The New Website
Obviously, I wanted to address the issues with the old site, while giving it a new, modern look. I believe I've achieved that. The new site uses the [Bootstrap](https://getbootstrap.com/) framework, which is a collection of CSS with a ton of great tools for creating websites. It's extremely customizable too, allowing me to tweak everything you see on the site exactly how I want it. Learning Bootstrap was fun and it was surprisingly easy to create the initial layout for the homepage. 

The issue with the news posts was not so simple. Normally, being able to dynamically add content to your website, like news posts, requires something called a CMS, or content management system. These CMSes range in complexity and there are a ton to look at. A friend turned me on to [Jekyll](https://jekyllrb.com/), which is like a CMS but is actually a static site builder. This means that you can feed it a bunch of news posts in individual files and it will spit out a functional web page for each. In order to use Jekyll, I had to rework my existing home page to work with how Jekyll wants files laid out, then continued with it to create the rest of the website. Now, any time I want to add a new news post, I can simply upload the file and rebuild Jekyll. 

Other than all of that, I've also done some other neat things. The application form is now styled the same as the website, which looks better than basically plopping the Google form into a window on the page. I've also renamed the contact page to **Apply** to make it more clear. You may have noticed the Wiki page at the top. That is not yet complete, but coming soon. Lastly, I have worked a lot to set up SEO, or search engine optimization. Basically, it helps sites like Google index your website more easily which leads to it being higher on the list when you search. Along with this, I am trying out Google Analytics which helps with SEO. I'm not sure if it will be beneficial so I may end up removing it.

So I hope you enjoy this new website as much as I have in creating it. If you have any feedback, suggestions or comments, please let me know. 