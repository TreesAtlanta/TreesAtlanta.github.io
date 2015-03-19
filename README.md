# Trees Atlanta

A barebones app used to track tree maintanence in Atlanta.

This application support the (http://treesatlproject.me) - check it out.

## Running Locally

Make sure you have Ruby installed.  Also, install the [Heroku Toolbelt](https://toolbelt.heroku.com/).

```sh
$ git clone git@github.com:heroku/ruby-getting-started.git
$ cd ruby-getting-started
$ bundle install
$ rake db:create db:migrate
$ foreman start web
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```sh
$ heroku create
$ git push heroku master
$ heroku run rake db:migrate
$ heroku open
```

## Documentation

For more information about using Trees Atlanta: http://docs.treesatlanta.apiary.io/#

- [Ruby on Heroku](https://devcenter.heroku.com/categories/ruby)


EDIT (03/08/2015) - Rails/Heroku no longer supported.

