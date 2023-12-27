package Prilozhenie.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Prilozhenie.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Парковка
 */
@Entity(name = "IISPrilozhenieПарковка")
@Table(schema = "public", name = "Парковка")
public class Parkovka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомПарковки")
    private Integer номпарковки;

    @Column(name = "Адрес")
    private String адрес;

    @OneToMany(mappedBy = "parkovka", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Parkomat> parkomats;


    public Parkovka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомПарковки() {
      return номпарковки;
    }

    public void setНомПарковки(Integer номпарковки) {
      this.номпарковки = номпарковки;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }


}