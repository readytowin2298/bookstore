const bookSchemaNew = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "isbn": "0691161518",
            "amazon_url": "http://a.co/eobPtX2",
            "author": "Matthew Lane",
            "language": "english",
            "pages": 264,
            "publisher": "Princeton University Press",
            "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
            "year": 2017
        }
    ],
    "required": [
        "isbn",
        "amazon_url",
        "author",
        "language",
        "pages",
        "publisher",
        "title",
        "year"
    ],
    "properties": {
        "isbn": {
            "$id": "#/properties/isbn",
            "type": "string",
            "title": "The isbn schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "0691161518"
            ]
        },
        "amazon_url": {
            "$id": "#/properties/amazon_url",
            "type": "string",
            "title": "The amazon_url schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "http://a.co/eobPtX2"
            ]
        },
        "author": {
            "$id": "#/properties/author",
            "type": "string",
            "title": "The author schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "Matthew Lane"
            ]
        },
        "language": {
            "$id": "#/properties/language",
            "type": "string",
            "title": "The language schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "english"
            ]
        },
        "pages": {
            "$id": "#/properties/pages",
            "type": "integer",
            "title": "The pages schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                264
            ]
        },
        "publisher": {
            "$id": "#/properties/publisher",
            "type": "string",
            "title": "The publisher schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "Princeton University Press"
            ]
        },
        "title": {
            "$id": "#/properties/title",
            "type": "string",
            "title": "The title schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "Power-Up: Unlocking the Hidden Mathematics in Video Games"
            ]
        },
        "year": {
            "$id": "#/properties/year",
            "type": "integer",
            "title": "The year schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                2017
            ]
        }
    },
    "additionalProperties": true
}

module.exports = bookSchemaNew