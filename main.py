from typing import Union
from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host    = "0.0.0.0",
        port    = 8036,
        reload  = True
    )

app = FastAPI()
templates = Jinja2Templates(directory="dist")

@app.get('/')
def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})




@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


