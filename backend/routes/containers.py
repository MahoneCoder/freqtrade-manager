## routes/containers.py
import docker
from fastapi import APIRouter, HTTPException

router = APIRouter(prefix="/containers", tags=["Containers"])

docker_client = docker.from_env()

@router.get("/")
def list_containers():
    return [{"id": c.id, "name": c.name, "status": c.status} for c in docker_client.containers.list(all=True)]

@router.post("/start/{container_id}")
def start_container(container_id: str):
    try:
        container = docker_client.containers.get(container_id)
        container.start()
        return {"message": f"Container {container_id} started"}
    except docker.errors.NotFound:
        raise HTTPException(status_code=404, detail="Container not found")

@router.post("/stop/{container_id}")
def stop_container(container_id: str):
    try:
        container = docker_client.containers.get(container_id)
        container.stop()
        return {"message": f"Container {container_id} stopped"}
    except docker.errors.NotFound:
        raise HTTPException(status_code=404, detail="Container not found")
