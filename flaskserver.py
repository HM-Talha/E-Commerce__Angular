from flask import Flask, send_from_directory
import path

app = Flask(__name__)


@app.route('/admin/<path:filename>')
def admin(filename):
    print(filename)
    if(filename==""):
        print("no filename")
    return send_from_directory(app.root_path + '/admin/', filename)

@app.route('/expresslaptop/<path:filename>')
def expresslaptop(filename):
    print("aaaa",filename)
    if(filename==""):
        print("no filename")
    return send_from_directory(app.root_path + '/expresslaptop/', filename)

@app.route('/indianmango/<path:filename>')
def indianmango(filename):
    print(filename)
    if(filename==""):
        print("no filename")
    return send_from_directory(app.root_path + '/indianmango/', filename)

@app.route('/naturemango/<path:filename>')
def naturemango(filename):
    print("bbbb",filename)
    if(filename==""):
        print("no filename")
    return send_from_directory(app.root_path + '/naturemango/', filename)

@app.route('/jobsite/<path:filename>')
def jobsite(filename):
    print(filename)
    if(filename==""):
        print("no filename")
    return send_from_directory(app.root_path + '/jobsite/', filename)

@app.route('/spurapp/<path:filename>')
def spurapp(filename):
    print(filename)
    if(filename==""):
        print("no filename")
    return send_from_directory(app.root_path + '/spurapp/', filename)

@app.route('/<path:filename>')
def jwt(filename):
    print(filename)
    if(filename==""):
        print("no filename")
    return send_from_directory(app.root_path + '/jwt/public', filename)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9001,debug=True)
    