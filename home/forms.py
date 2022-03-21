from attr import attrs
from .models import OrgForm
from django.forms import ModelForm, TextInput, Textarea

class OrgForma(ModelForm):
    class Meta:
        model = OrgForm
        fields = ["Link","Name","Decryption"]
        widgets = {
            "Link": TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Вставьте ссылку'
            }),
            "Name": TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Укажите контактные данные'
            }),
            "Decryption": Textarea(attrs={
                'class': 'form-control',
                'placeholder': 'Введите описание данного проекта/страны/человека'
            })
        }
        