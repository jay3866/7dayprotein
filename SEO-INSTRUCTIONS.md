# SEO and Meta Tag Instructions

This document provides guidance on updating the placeholder HTML tags, title tags, and meta descriptions in the 7-Day Metabolic Reset landing page.

## HTML Meta Tags to Update

All placeholder tags are located in the `index.html` file at the root of the project. Look for comments starting with `<!-- PLACEHOLDER: -->` to find sections that need to be updated.

### Title Tag

```html
<title>7-Day Metabolic Reset | Natural Fat Loss Without Counting Calories</title>
```

- Keep your title between 50-60 characters
- Include your primary keyword near the beginning
- Make it compelling and relevant to the page content

### Meta Description

```html
<meta name="description" content="Reset your metabolism in just 7 days with our protein-focused approach. Achieve natural fat loss without counting calories, cardio, or cutting everything you love." />
```

- Keep your description between 150-160 characters
- Include your primary and secondary keywords naturally
- Write a compelling summary that encourages clicks from search results

### Meta Keywords

```html
<meta name="keywords" content="metabolic reset, fat loss, protein diet, weight loss, no calorie counting" />
```

- Include 5-8 relevant keywords separated by commas
- Focus on terms your target audience would search for

### Social Media Meta Tags

#### Open Graph (Facebook)

```html
<meta property="og:title" content="7-Day Metabolic Reset | Natural Fat Loss Without Counting Calories" />
<meta property="og:description" content="Reset your metabolism in just 7 days with our protein-focused approach. Achieve natural fat loss without counting calories, cardio, or cutting everything you love." />
<meta property="og:image" content="https://yourdomain.com/path-to-image.jpg" />
<meta property="og:url" content="https://yourdomain.com" />
```

- Update with your actual domain
- Create a compelling featured image (recommended size: 1200 x 630 pixels)

#### Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="7-Day Metabolic Reset | Natural Fat Loss Without Counting Calories" />
<meta name="twitter:description" content="Reset your metabolism in just 7 days with our protein-focused approach. Achieve natural fat loss without counting calories, cardio, or cutting everything you love." />
<meta name="twitter:image" content="https://yourdomain.com/path-to-image.jpg" />
```

- Use the same image as your Open Graph image for consistency

### Canonical URL

```html
<link rel="canonical" href="https://yourdomain.com" />
```

- Update with the exact URL of your landing page
- This helps prevent duplicate content issues if the page is accessible from multiple URLs

### Favicon

```html
<link rel="icon" type="image/svg+xml" href="/vite.svg" />
```

- Replace with your own favicon
- Recommended formats: .ico, .png, or .svg
- Place your favicon in the public directory

## Best Practices

1. **Be Specific**: Make your meta tags specific to the content on the page
2. **Be Unique**: Avoid duplicate titles and descriptions across different pages
3. **Be Relevant**: Ensure your meta tags accurately represent the page content
4. **Be Compelling**: Write meta descriptions that encourage clicks from search results
5. **Use Keywords Naturally**: Don't stuff keywords; use them in a natural, readable way

## Testing Your Meta Tags

After updating your meta tags, you can test how they appear in search results and social media using these tools:

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Additional SEO Recommendations

1. **Content Quality**: Ensure your landing page content is high-quality, original, and valuable to users
2. **Mobile Optimization**: Verify your page looks good and functions well on mobile devices
3. **Page Speed**: Optimize images and minimize unnecessary code to improve loading times
4. **Internal Linking**: If you have multiple pages, link between them using descriptive anchor text
5. **External Links**: Include links to reputable sources when referencing external information
