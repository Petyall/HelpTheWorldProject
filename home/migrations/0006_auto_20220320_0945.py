# Generated by Django 2.2.24 on 2022-03-20 06:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_auto_20220320_0130'),
    ]

    operations = [
        migrations.AddField(
            model_name='org',
            name='SummaR',
            field=models.CharField(blank=True, default='some data', help_text='Введите собранную сумму', max_length=50, verbose_name='СуммаСобранная'),
        ),
        migrations.AlterField(
            model_name='org',
            name='Summa',
            field=models.CharField(blank=True, default='some data', help_text='Введите количество сборов в рублях', max_length=50, verbose_name='Сумма'),
        ),
    ]
