# SimpleTails

SimpleTails is inspired by [Simple.CSS](https://simplecss.org/) a classless CSS framework that makes semantic HTML look good.

I wanted a way to to have sensible styling in a Rails application with minimal setup with the added bonus of being abble to easily change the defaults or overide them.

SimpleTails leverages the [official Tailwind CSS Typography plugin](https://tailwindcss.com/docs/typography-plugin) `prose` classes with some custom setup.
This makes it possible to have default styling out the box.

---
## Bennefits

Click below to see some examples.

### Typography Example
<details>
  <summary>📘<p> Click to view</p></summary>

HTML heading tags and unordered lists

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<ul>
  <li>
    <strong>I am bold</strong>
  </li>
  <li>
    <em>I am italic</em>
  </li>
  <li>
    <u>I am underlined</u>
  </li>
</ul>
```
 
Renders the following

<img src="./images/typography_render.png" width="400" >

</details>

---

### Basic Table Example
<details>
  <summary>📂 <p> Click to view</p></summary>

A table with just enough styling can be rendered from something like this 

```html 
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Number</th>
    </tr>
  </thead>
  <tbody>
    <% %w(John Sally Mary Peter Simon James).shuffle.each do |name| %>
      <tr>
        <td><%= name %></td>
        <td><%= rand(99999) %></td>
      </tr>
    <% end %>
  </tbody>
</table>
```

Renders the following

<img src="./images/table_rendering.png" width="800">

</details>

---

### Basic Header & Nav Example
<details>
  <summary>🧭 <p> Click to view</p></summary>

For a quick header and navigation solution
```html
<header>
  <nav>
    <%= link_to "Home", root_path %>
    <%= link_to "Services", services_path %>
    <%= link_to "Blog", posts_path %>
    <%= link_to "About", about_us_path %>
    <%= link_to "Contact", contacts_path %>
  </nav>
  <h1 class="">SimpleTails</h1>
  <p>Build fast using symantic HTML tags in Rails</p>
</header>
```
Renders the following

<img src="./images/header_render2.png" width="800">

And on mobile 

<img src="./images/header_render_mobile.png" width="400">

</details>

---
### Typography With Inline Overides Example

<details>
  <summary>📙<p> Click to view</p></summary>

```html
<h1 class="font-extralight">Heading 1</h1>
<h2 class="text-red-500">Heading 2</h2>
<h3 class="text-sm">Heading 3</h3>
<ul>
  <li>
    <strong>I am <span class="text-pink-600 font-extrabold">bold</span></strong>
  </li>
  <li>
    <em>I am <span class="text-orange-600 text-3xl font-extralight">italic</span></em>
  </li>
</ul>
```

Renders the following

<img src="./images/typography_with_overides_render.png" width="400">

</details>

---

### Basic Form  Example

<details>
  <summary>📝<p> Click to view</p></summary>

<details>
  <summary>Click here to view the code</summary>

```html
<%= form_with url: "/", method: :get do |form| %>
<p>
  <%= form.label :title %>
  <%= form.select :desired_attribute, %w(Mr Miss Mrs Other) %>
</p>
<p>
  <%= form.label :first_name %>
  <%= form.text_field :first_name %>
</p>
<p>
  <%= form.label :email %>
  <%= form.email_field :email %>
</p>
<p>
  <%= form.label :message %>
  <%= form.text_area :message, rows: 6, data: {character_counter_target: :input} %>
</p>
<p>
  <%= form.label :date %>
  <%= form.date_field :date %>
</p>
<label class="radio-group-name">Age:</label>
<div class="radio-group">
  <p>
    <%= form.radio_button :age, "child" %>
    <%= form.label :age_child, "I am younger than 21" %>
  </p>
  <p>
    <%= form.radio_button :age, "adult" %>
    <%= form.label :age_adult, "I am over 21" %>
  </p>
  <p>
    <%= form.radio_button :age, "eternal", disabled: true %>
    <%= form.label :age_adult, "I am eternal" %>
  </p>
</div>
<p>
  <%= form.label :select_one_or_more %>
  <% @cities = [
  {id: 1, name: "Berlin"},
  {id: 2, name: "Chicago"},
  {id: 3, name: "Madrid"},
  {id: 4, name: "Cape Town"}
  ].collect { |u| [u[:name], u[:id]] } %>
  <%= select_tag :city,
  options_for_select(@cities),
  multiple: true %>
</p>
<div class="checkbox-group">
  <p>
    <%= form.check_box :agree_to_terms %>
    <label for="agree_to_terms"> I agree to the <a href="#">terms and conditions</a></label>
  </p>
</div>
<%= form.button %>
<%= form.button "Clear" %>
<%= form.button "Disabled", disabled: true %>`
<% end %>

```
</details>

Renders the following

<img src="./images/form_render.png" width="600">
</details>

---

## How it works

A single portable stylesheet with custom TailwindCSS prose is used.  
All the magic is here: [simple_tails.css](app/assets/stylesheets/simple_tails.css)


> You only need the `simple_tails.css` stylesheet. This Rails app exists for the purpose of developing and refining SimpleTails.

---

## Usage: 

**Prerequisites:** 
 - You have TailwindCSS installed and working in your Rails app
 - You have the [`@tailwindcss/typography`](https://tailwindcss.com/docs/typography-plugin) plugin installed

1. Copy the [simple_tails.css](app/assets/stylesheets/simple_tails.css) file found in this project to your app.
2. In your `application.css` import that file. 

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

@import "./simple_tails.css";
```

Then add the `.simple-tails` class to the element encapsulating the HTML you want to style.

If you want any element to be `prose` free and have it revert to the default unstyled TailwindCSS use the `not-prose` class

```html
<main class="simple-tails" >
  <h1>Some Heading</h1>
  <p>Some blurb here...</p>
    <!-- Content styled via custom prose -->
  <div>
    <!-- Some content that needs to be prose-free -->
  </div>
</main>

```

---- 

## Developing or trying it out via this app.

Clone this repo 
```shell
git clone git@github.com:davidteren/simple_tails.git
```
Change into the project directory
```shell
cd simple_tails
```

Run the setup script
```shell
./bin/setup
```

If the app is not started after the setup run 
```shell
./bin/dev
```

Visit [127.0.0.1:3000](http://127.0.0.1:3000/)

Loging using the following credentials:

| Email            | Password |
|------------------|----------|
| user@example.com | pass123  |

---

## Example Screenshot

![](./images/example_screenshot.png)


### Contribute

Please feel free to do so 🚀


### To Do 

- [ ] Fix off center layouts
- [ ] Add a way for forms to be centered i.e. devise forms
- [ ] Implement color scheme similar to Simple.CSS 
- [ ] Implement dark/light modes 
- [ ] Add the footer styling
- [ ] Add color theme options including original Simple.CSS Dark & Light themes
