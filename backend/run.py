from app import create_app, db

app = create_app()

@app.cli.command("init-db")
def init_db():
    """初始化数据库"""
    db.create_all()
    print("Initialized the database.") 