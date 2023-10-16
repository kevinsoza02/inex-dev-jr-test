from django.db import models
import uuid
# Create your models here

class Carros(models.Model):
    uuid = models.UUIDField(primary_key=True,  default=uuid.uuid4, editable=False)
    url_img = models.CharField(max_length=150, blank=False)
    marca = models.CharField(max_length=30, blank=False)
    modelo = models.CharField(max_length=50, blank=False)
    cor = models.CharField(max_length=50, blank=False)
    ano = models.CharField(max_length=4, blank=False)
    motor = models.CharField(max_length=50, blank=False)
    kilometragem = models.IntegerField(blank=False)
    valor = models.DecimalField(decimal_places=2,max_digits=10,blank=False)

class Caracteristicas(models.Model):
    uuid = models.UUIDField(primary_key=True,  default=uuid.uuid4, editable=False)
    id_carro = models.ForeignKey(Carros, on_delete=models.CASCADE)
    caracteristica = models.CharField(max_length=30, blank=False)

