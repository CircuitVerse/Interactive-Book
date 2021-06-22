#!/usr/bin/python3
#
# Python script for Interactive Book to generate Page APIs from
# Jekyll-admin and store them in build directory
#
# Copyright (C) 2021, Manjot Sidhu <manjot.techie@gmail.com>
#           (C) 2021, CircuitVerse <support@circuitverse.org>

# Imports
import sys, json, urllib.request, shutil, os, argparse

# Constants
host = "localhost"
port = "4000"
base_path = "pages"

# Hosted API URL
deployed_host = "learn.circuitverse.org"
deployed_url = f'https://{deployed_host}/_api'

# Local API URL
base_api_url = f'http://{host}:{port}/_api'
base_url = f'{base_api_url}/{base_path}'

# Output Directories
build_dir = 'out'
api_dir = f'{build_dir}/_api'

# Arguments Parser
parser = argparse.ArgumentParser(description='Generate Page APIs from Jekyll-admin and store them in build directory')
parser.add_argument('--src_port', type=int, dest='src_port', default=port, help='Destination port address where the generated API will be hosted.')
parser.add_argument('--dest_host', type=str, dest='dest_host', default=deployed_host, help='Destination host address of the site where the API will be hosted.')
args = parser.parse_args()

# Overide Arguments
port = args.src_port
deployed_host = args.dest_host


def get_response(url):
    return urllib.request.urlopen(url).read().decode('utf-8')


def get_json(response):
    return json.loads(response)


def save_content(content, file_path):
    print(f'Saving to {file_path}')
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    f = open(file_path, "w", encoding='utf-8')
    f.write(content)
    f.close()


def get_effective_file_path(path):
    return f'{api_dir}/{path}'


def get_effective_content(content):
    return content.replace(f'http://{host}:{port}', f'https://{deployed_host}')


def save_api_page(res, api_path):
    save_content(get_effective_content(res), get_effective_file_path(api_path) + ".json")


def save_page(api_url):
    res = get_response(api_url)
    api_data = get_json(res)
    save_content(get_effective_content(res), get_effective_file_path(f'{base_path}/{api_data["path"]}'))


def recursive_scan(api_url, path):
    res = get_response(api_url)
    api_data = get_json(res)
    save_api_page(res, path)

    for item in api_data:
        if "type" not in item:
            save_page(item["api_url"])
        elif item["type"] == "directory":
            recursive_scan(item["api_url"], f'{base_path}/{item["path"]}')


def main():
    print("CV Interactive Book API Generator v0.1\n")
    recursive_scan(base_url, base_path)


if __name__ == '__main__':
    main()
