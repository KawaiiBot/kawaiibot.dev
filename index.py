import sys
import json

from jinja2_static import Builder

build = Builder()
argument = sys.argv[1] if len(sys.argv) > 1 else None

with open("./static/data/commands.json", "r", encoding="utf8") as f:
    commands = json.load(f)

build.generate(
    debug=False if argument == "build" else True,
    URL="https://kawaiibot.dev", commands=commands
)
