# SensorAtlas Website

This repository manages the source code of the SensorAtlas website and it also
handles continuous integration with automated builds and deployments.

## Installation

While there are Ruby packages available for Linux, it's often necessary to
install a different version. In this case `rbenv` or `rvm` are popular tools to
manage multiple versions of Ruby.

The following describes the use of `rbenv`:

```bash
# Install dependencies as root
sudo apt install -y git build-essential libssl-dev libreadline-dev zlib1g-dev

# For Ubuntu Bash users you need additionally
sudo apt install nodejs

# Install rbenv
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc

# Install ruby-build
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build

# Install latest Ruby and set it as global
rbenv install -l | more
rbenv install 2.4.1
rbenv global 2.4.1

# Install bundler as we always need it
gem install bundler
```

After the development environment is setup, install
[Middleman](https://middlemanapp.com):

```bash
gem install middleman
```

Then change into the project directory and install dependencies:

```bash
bundle install --path vendor/bundle
```

## Usage

For development, change into the project directory and run:

```bash
bundle exec middleman server
```

Then check the website in your browser: [http://localhost:4567](http://localhost:4567)
It will refresh the website automatically, when changes are made and saved.

To build the static files run:

```bash
bundle exec middleman build
```

The generated files can be found in the `build` directory.

---

下記機能を提供するWebインタフェースを作成します

- 地図上に指定した期間またはリアルタイムのデータを表示
- 指定した期間のデータをCSV形式でダウンロード

Create web interface that provides the following functions:

- Display period or real-time data specified on a map
- download data from specified period (in CSV)
