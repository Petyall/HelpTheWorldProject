from django.db import models

class Type(models.Model):
    name = models.CharField(
        max_length = 200,
        help_text = "Введите тип пожертвований",
        verbose_name = "Тип"
    )
    def __str__(self):
        return self.name

class Org(models.Model):
    name = models.CharField(
        max_length = 40,
        help_text = "Введите название организации/страны/человека",
        verbose_name = "Имя"
    )
    link = models.TextField(
        help_text = "Вставьте ссылку, куда будут происходить денежные переводы",
        verbose_name = "Ссылка"
    )
    Decryption = models.CharField(
        max_length = 220,
        help_text = "Введите описание того,  на что пойдут пожертвования",
        verbose_name = "Описание"

    )
    Summa = models.CharField(
        max_length = 50,
        help_text = "Введите количество сборов в рублях",
        verbose_name = "Сумма",
        blank=True,
        default="some data"
    )
    SummaR = models.CharField(
        max_length = 50,
        help_text = "Введите собранную сумму",
        verbose_name = "СуммаСобранная",
        blank=True,
        default="some data"
    )
    Picture = models.ImageField(
        upload_to='images/',
        help_text = "Вставьте картинку, относящуюся к пожертвованиям",
        verbose_name = "Картинка"
    )
    TypeOrg = models.ForeignKey(
        'Type',
        on_delete=models.CASCADE,
        help_text = "Выберите тип пожертвований",
        verbose_name = "Тип пожертвований",
        null=True
    )
    def __str__(self):
        return self.name

class Status(models.Model):
    name = models.CharField(
        max_length = 30,
        help_text = "Введите статус пожертвований",
        verbose_name = "Статус"
    )
    def __str__(self):
        return self.name

class Instance(models.Model):
    org = models.ForeignKey('Org',
        on_delete=models.CASCADE,
        null=True)
    status = models.ForeignKey('Status',
        on_delete=models.CASCADE,
        null=True,
        help_text="Изменить статус пожертвований",
        verbose_name="Статус пожертвований")
    
    def __str__(self):
        return '%s %s' % (self.status, self.org)


class OrgForm(models.Model):
    Link = models.TextField(
        help_text = "Вставьте ссылку, куда будут происходить денежные переводы",
        verbose_name = "Ссылка"
    )
    Name = models.CharField(
        max_length = 200,
        help_text = "Введите ваши контактные данные",
        verbose_name = "Имя"
    )
    Decryption = models.TextField(
        help_text = "Введите описание того, на что пойдут пожертвования",
        verbose_name = "Описание"
    )
    def __str__(self):
        return self.Name

class Help(models.Model):
    link = models.TextField(
        help_text = "Вставьте ссылку, куда будут происходить денежные переводы",
        verbose_name = "Ссылка"
    )
    name = models.CharField(
        max_length = 200,
        help_text = "Введите ваши контактные данные",
        verbose_name = "Имя"
    )
    def __str__(self):
        return self.name
