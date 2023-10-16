from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from Carros.models import Carros, Caracteristicas
from django.http import Http404
from Carros.serializers import CarrosSerializer, CaracteristicasSerializer
from rest_framework import viewsets, permissions, authentication, pagination

# Create your views here.
class CarrosViewSet(viewsets.ModelViewSet):
    queryset = Carros.objects.all()
    serializer_class = CarrosSerializer
    permission_classes = []
    http_method_names = ['get']

    def retrieve(self, request, id):
        try:
            return Carros.objects.get(id=id)
        except Carros.DoesNotExist:
            raise Http404
        
class CarrosPagination(pagination.PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 20

class CarrosPaginationViewSet(viewsets.ModelViewSet):
    queryset = Carros.objects.all()
    serializer_class = CarrosSerializer
    pagination_class = CarrosPagination
    http_method_names = ['get']

    def get_all(self, request):
        carros = Carros.objects.all()
        serializer = CarrosSerializer(carros, many=True)
        return Response(serializer.data)

class CreateCarrosViewSet(viewsets.ModelViewSet):
    queryset = Carros.objects.all()
    serializer_class = CarrosSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [authentication.TokenAuthentication]
    http_method_names = ['post']

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.POST)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CaracteristicasViewSet(viewsets.ModelViewSet):
    queryset = Caracteristicas.objects.all()
    serializer_class = CaracteristicasSerializer
    http_method_names = ['get']

    def list(self, request):
        caracteristicas = Caracteristicas.objects.all()
        serializer = CaracteristicasSerializer(caracteristicas, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk):
        try:
            caracteristicas = Caracteristicas.objects.filter(id_carro= pk)
            serializer = CaracteristicasSerializer(caracteristicas, many=True)
            return Response(serializer.data)
        except Caracteristicas.DoesNotExist:
            raise Http404
    

class CreateCaracteristicasViewSet(viewsets.ModelViewSet):
    queryset = Caracteristicas.objects.all()
    serializer_class = CaracteristicasSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [authentication.TokenAuthentication]
    http_method_names = ['post']

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.POST)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)