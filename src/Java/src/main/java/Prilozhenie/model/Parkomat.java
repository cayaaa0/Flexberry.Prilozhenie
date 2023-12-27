package Prilozhenie.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Prilozhenie.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Паркомат
 */
@Entity(name = "IISPrilozhenieПаркомат")
@Table(schema = "public", name = "Паркомат")
public class Parkomat {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "НомерПарк")
    private Integer номерпарк;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Usluga")
    @Convert("Usluga")
    @Column(name = "Услуга", length = 16, unique = true, nullable = false)
    private UUID _uslugaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Usluga", insertable = false, updatable = false)
    private Usluga usluga;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Parkovka")
    @Convert("Parkovka")
    @Column(name = "Парковка", length = 16, unique = true, nullable = false)
    private UUID _parkovkaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Parkovka", insertable = false, updatable = false)
    private Parkovka parkovka;

    @OneToMany(mappedBy = "parkomat", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SHlagbaum> shlagbaums;

    @OneToMany(mappedBy = "parkomat", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Terminal> terminals;


    public Parkomat() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }

    public Integer getНомерПарк() {
      return номерпарк;
    }

    public void setНомерПарк(Integer номерпарк) {
      this.номерпарк = номерпарк;
    }


}