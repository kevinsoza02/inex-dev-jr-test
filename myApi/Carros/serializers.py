from rest_framework import serializers
from Carros.models import Carros, Caracteristicas

class CarrosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carros
        fields = '__all__'
        
class CaracteristicasSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Caracteristicas
        fields = '__all__'