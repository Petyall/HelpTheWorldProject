from rest_framework import serializers

from .models import Org, OrgForm 

class OrgSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Org
        fields = ('name', 'link', 'Decryption', 'Picture', 'Summa', 'SummaR')

class OrgFormSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OrgForm
        fields = ('Name', 'Link', 'Decryption')

